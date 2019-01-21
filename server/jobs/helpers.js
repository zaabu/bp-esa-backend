import fs from 'fs';
import path from 'path';
/* eslint-disable import/prefer-default-export */

import { findPartnerById } from '../modules/allocations';
import emailTransport from '../modules/email/emailTransport';
import constructMailOptions from '../modules/email/emailModule';

const getEmailTemplate = emailTemplate => path.join(__dirname, `../modules/email/emailTemplates/${emailTemplate}`);
const placementFilTemplate = getEmailTemplate('placement-fail-email.html');


/**
 * @desc Retrieves necessary info. to be sent via email for any given placement
 *
 * @param {oject} placement A placement instance from allocation
 *
 * @returns {object} Mail info to be sent
 */
export const getMailInfo = async (placement) => {
  const {
    fellow: { name: developerName, email: developerEmail, location: developerLocation },
    client_name: partnerName,
    client_id: partnerId,
    end_date: rollOffDate,
    start_date: dateStart,
  } = placement;
  const { location: partnerLocation } = await findPartnerById(partnerId);
  return {
    developerName,
    partnerName,
    developerEmail,
    developerLocation,
    partnerLocation,
    rollOffDate,
    startDate: dateStart === '' ? 'not specified' : dateStart,
  };
};

/**
 * @function sendPlacementFetchEmail
 * @desc Send email to ESA if fetching placements fails constantly
 * @param {string} receiver Info about the mail to be sent
 *
 * @returns {Object} Promise to fetch new placements and execute automations
 */

const sendPlacementFetchEmail = async (receiver) => {
  try {
    const mailOptions = constructMailOptions({
      sendTo: receiver,
      emailSubject: 'Allocations placement data error',
      // eslint-disable-next-line no-eval
      emailBody: eval(`\`${fs.readFileSync(placementFilTemplate).toString()}\``),
    });
    await emailTransport.sendMail(mailOptions);
  } catch (error) {
    return { status: 'fail', message: error };
  }
};

export default sendPlacementFetchEmail;

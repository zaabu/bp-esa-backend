/**
 * @description Determines the overal status from individual status
 * @param {Array} automations Array of automations
 *
 * @returns {String} success/failure
 */
export function getOveralStatus(automations) {
  return (
    Array.isArray(automations)
    && automations.length
    && automations.every(
      automation => automation.status === 'success',
    )
  ) ? 'success' : 'failure';
}

/**
 * @description Copy original object to another object with only provided parameters
 * @param {Object} srcObj Source/Original Object
 * @param {Array} props Array of parameters to be copied
 *
 * @returns {Object} Copy Object
 */
export function objectCopy(srcObj, props) {
  const copy = {};
  props.forEach((prop) => {
    if (prop in srcObj) {
      copy[prop] = srcObj[prop];
    }
  });
  return copy;
}

/**
 * @description Formats slack automations data
 * @param {Array} automationArray Array of automations
 * @param {String} activities Activities parameter key.
 * @param {Array} props Array of parameters to be processed
 *
 * @returns {Object} Formatted slack automation
 */
export function formatAutomations(automationArray, activities, props) {
  const automations = {};
  automations.status = getOveralStatus(automationArray);
  automations[activities] = automationArray.map(sa => objectCopy(sa, props));
  return automations;
}

/**
 * @description Formats a single automation data payload received from database.
 * @param {Object} automation Single automation data returned from database
 *
 * @returns {Object} Formated automation to be returned by the API
 */
export function formatPayload(automation) {
  const props = ['id', 'fellowId', 'email', 'fellowName', 'partnerId', 'partnerName', 'type', 'createdAt', 'updatedAt'];
  const formattedAutomation = objectCopy(automation, props);

  formattedAutomation.slackAutomations = formatAutomations(
    automation.slackAutomations,
    'slackActivities',
    ['id', 'status', 'statusMessage', 'type', 'channelId', 'channelName', 'slackUserId'],
  );
  formattedAutomation.emailAutomations = formatAutomations(
    automation.emailAutomations,
    'emailActivities',
    ['id', 'status', 'statusMessage', 'recipient', 'subject'],
  );
  formattedAutomation.nokoAutomations = formatAutomations(
    automation.nokoAutomations,
    'nokoActivities',
    ['id', 'status', 'statusMessage', 'type', 'nokoUserId', 'projectId'],
  );

  return formattedAutomation;
}

/**
 * @description Formats automation payload received from database.
 * @param {Array} payload Automations data returned from database
* @param {boolean} isFormat formmattting isn't needed
 * @returns {Array} Formated automation to be returned by the API
 */
export function formatAutomationResponse(payload, isFormat) {
  return isFormat ? payload : payload.map(automation => formatPayload(automation));
}


/**
 * Returns a response JSON object
 *
 * @param {object} res Response object
 * @param {object} allData data object returned from the database
 * @param {integer} page page number
 * @param {integer} numberOfPages total number of pages
 * @param {object} data data object
 * @param {integer} nextPage next page number
 * @param {integer} prevPage previous page number
 * @param {boolean} isFormat formmattting isn't needed
 * @returns {object} Response containing paginated object
 */
export const paginationResponse = (res,
  allData,
  page,
  numberOfPages,
  data,
  nextPage,
  prevPage, isFormat) => res.status(200).json({
  status: 'success',
  message: 'Successfully fetched data',
  data: formatAutomationResponse(allData, isFormat),
  pagination: {
    currentPage: page,
    numberOfPages,
    dataCount: data.count,
    nextPage,
    prevPage,
  },
});

export const response = (res, allData) => res.status(200).json({
  status: 'success',
  message: 'Successfully fetched data',
  data: allData,
});

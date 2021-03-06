import sinon from 'sinon';
import proxyquire from 'proxyquire';
import onboardingAllocations from '../mocks/allocations';
import slackMocks from '../mocks/slack';
import { redisdb } from '../../server/helpers/redis';

const createOrUpdateSlackAutomation = sinon.stub();

const slack = proxyquire('../../server/modules/slack/slackIntegration', {
  '../automations': {
    createOrUpdateSlackAutomation,
  },
});

const fakeSlackClient = {
  lookupByEmail: sinon.stub(slack.slack, 'lookupByEmail').callsFake(() => slackMocks.slackUser),
  invite: sinon.stub(slack.slack, 'invite').callsFake(() => slackMocks.inviteUser),
  kick: sinon.stub(slack.slack, 'kick').callsFake(() => slackMocks.removeUser),
  create: sinon.stub(slack.slack, 'createChannel').callsFake(() => slackMocks.createGroups),
  info: sinon.stub(slack.slack, 'channelInfo').callsFake(() => slackMocks.groupInfo),
  listChannels: sinon.stub(slack.slack, 'listChannels').resolves(slackMocks.channelList),
};

/* eslint-disable no-unused-expressions */

describe('Slack Integration Test Suite', async () => {
  beforeEach(() => {
    Object.keys(fakeSlackClient).forEach(fake => fakeSlackClient[fake].resetHistory());
    createOrUpdateSlackAutomation.resetHistory();
  });
  it('Should create internal slack channels and save the automation to DB', async () => {
    const { data } = onboardingAllocations;
    const { client_name: partnerName } = data.values[0];
    await redisdb.clear();
    const createResult = await slack.findOrCreatePartnerChannel(
      { name: partnerName },
      'internal',
      'onboarding',
    );
    const expectedResult = {
      id: slackMocks.createGroups.group.id,
      name: slackMocks.createGroups.group.name,
    };
    expect(fakeSlackClient.create.calledOnce).to.be.true;
    expect(createResult.channelId).to.equal(expectedResult.id);
    expect(createResult.channelName).to.equal(`${expectedResult.name}-int`);
    expect(createResult.type).to.equal('create');
  });
  it('Should retrieve general slack channel', async () => {
    const { data } = onboardingAllocations;
    const { client_name: partnerName } = data.values[0];
    const createResult = await slack.findOrCreatePartnerChannel(
      { name: partnerName },
      'general',
      'onboarding',
    );
    const expectedResult = {
      id: slackMocks.createGroups.group.id,
      name: slackMocks.createGroups.group.name,
    };
    expect(fakeSlackClient.create.calledOnce).to.be.false;
    expect(createResult.channelId).to.equal(expectedResult.id);
    expect(createResult.channelName).to.equal(expectedResult.name);
    expect(createResult.type).to.equal('retrieve');
  });
  it('Should create internal slack channels and save the automation to DB from redis', async () => {
    const { data } = onboardingAllocations;
    const { client_name: partnerName } = data.values[0];
    const createResult = await slack.findOrCreatePartnerChannel(
      { name: partnerName },
      'internal',
      'onboarding',
    );
    const expectedResult = {
      id: slackMocks.createGroups.group.id,
      name: slackMocks.createGroups.group.name,
    };
    expect(createResult.channelId).to.equal(expectedResult.id);
    expect(createResult.channelName).to.equal(`${expectedResult.name}-int`);
  });
  it('Should add developers to respective channels and save the automation to DB', async () => {
    const email = 'ebelensoffor@gmail.com';
    const channel = 'CJFG3JWCX';
    await slack.accessChannel(email, channel, 'invite');
    expect(fakeSlackClient.invite.calledOnce).to.be.true;
    expect(fakeSlackClient.info.calledOnce).to.be.true;
  });
  it('Should remove developers from channels and save the automation to DB', async () => {
    const email = 'ebelensoffor@gmail.com';
    const channel = 'CJFG3JWCX';
    await slack.accessChannel(email, channel, 'kick');
    expect(fakeSlackClient.kick.calledOnce).to.be.true;
    expect(fakeSlackClient.info.calledOnce).to.be.true;
  });
});

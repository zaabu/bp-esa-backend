const slackMocks = {
  createGroups: {
    ok: true,
    group: {
      id: 'GDL7RDC5V',
      name: 'p-virtualsummits',
      is_group: true,
      created: 1540194427,
      creator: 'UDECYD0LQ',
      is_archived: false,
      name_normalized: 'sample-channel',
      is_mpim: false,
      is_open: true,
      last_read: '0000000000.000000',
      latest: null,
      unread_count: 0,
      unread_count_display: 0,
      members: ['UDECYD0LQ'],
      topic: {
        value: '',
        creator: '',
        last_set: 0,
      },
      purpose: {
        value: '',
        creator: '',
        last_set: 0,
      },
      priority: 0,
    },
    warning: 'missing_charset',
    response_metadata: {
      warnings: ['missing_charset'],
    },
  },
  slackUser: {
    ok: true,
    user: {
      id: 'UJ25QA667',
      team_id: 'TDG6WMQCF',
      name: 'John',
      deleted: false,
      color: 'e0a729',
      real_name: 'Ebele Nsoffor',
      tz: 'Africa/Lagos',
      tz_label: 'East Africa Time',
      tz_offset: 10800,
      profile: {
        title: '',
        phone: '',
        skype: '',
        real_name: 'John Doe',
        real_name_normalized: 'John Doe',
        display_name: '',
        display_name_normalized: '',
        status_text: '',
        status_emoji: '',
        status_expiration: 0,
        avatar_hash: 'g380c211d1dd',
        email: 'ebelensoffor@gmail.com',
      },
      is_admin: false,
      is_owner: false,
      is_primary_owner: false,
      is_restricted: false,
      is_ultra_restricted: false,
      is_bot: false,
      is_app_user: false,
      updated: 1540902916,
      has_2fa: false,
    },
  },
  inviteUser: {
    ok: true,
    group: {
      id: 'GDL7RDC5V',
      name: 'sample-channel',
      is_group: true,
      created: 1540194427,
      creator: 'UDECYD0LQ',
      is_archived: false,
      name_normalized: 'sample-channel',
      is_mpim: false,
      is_open: true,
      last_read: '1540194428.000200',
      latest: {
        user: 'UDABCDEFG',
        text: '<@UDABCDEFG> has joined the group',
        type: 'message',
        subtype: 'group_join',
        ts: '1540194428.000200',
      },
      unread_count: 0,
      unread_count_display: 0,
      members: ['UDABCDEFG', 'UDRH80PLJ'],
      topic: {
        value: '',
        creator: '',
        last_set: 0,
      },
      purpose: {
        value: '',
        creator: '',
        last_set: 0,
      },
      priority: 0,
    },
  },
  removeUser: {
    ok: true,
  },
  groupInfo: {
    ok: true,
    channel: {
      id: 'GBRR4B5E3',
      name: 'rack-city',
      is_group: true,
      created: 1531645759,
      creator: 'UBNE1D2BV',
      is_archived: false,
      name_normalized: 'rack-city',
      is_mpim: false,
      is_open: true,
      last_read: '1547826649.000000',
      latest: {
        user: 'UE4910GEQ',
        type: 'message',
        subtype: 'group_join',
        ts: '1547483152.000200',
        text: '<@UE4910GEQ> has joined the group',
        inviter: 'UBNE1D2BV',
      },
      unread_count: 0,
      unread_count_display: 0,
      members: ['UBNE1D2BV', 'UBQ31C11N', 'UE4910GEQ'],
      topic: { value: '', creator: '', last_set: 0 },
      purpose: { value: '', creator: '', last_set: 0 },
    },
    scopes: [
      'identify',
      'bot',
      'commands',
      'groups:read',
      'users:read',
      'users:read.email',
      'chat:write:bot',
      'groups:write',
    ],
    acceptedScopes: ['groups:read'],
  },
  userList: {
    ok: true,
    members: [
      {
        id: 'USLACKBOT',
        team_id: 'TBPK3R7D5',
        name: 'slackbot',
        deleted: false,
        color: '757575',
        real_name: 'Slackbot',
        tz: null,
        tz_label: 'Pacific Standard Time',
        tz_offset: -28800,
        profile: {
          title: '',
          phone: '',
          skype: '',
          real_name: 'Slackbot',
          real_name_normalized: 'Slackbot',
          display_name: 'slackbot',
          display_name_normalized: 'slackbot',
          fields: null,
          status_text: '',
          status_emoji: '',
          status_expiration: 0,
          avatar_hash: 'sv41d8cd98f0',
          always_active: true,
          first_name: 'Slackbot',
          last_name: '',
          image_24: 'https://a.slack-edge.com/7f796/img/slackbot/slackbot_24.png',
          image_32: 'https://a.slack-edge.com/7f796/img/slackbot/slackbot_32.png',
          image_48: 'https://a.slack-edge.com/7f796/img/slackbot/slackbot_48.png',
          image_72: 'https://a.slack-edge.com/7f796/img/slackbot/slackbot_72.png',
          image_192: 'https://a.slack-edge.com/7f796/img/slackbot/slackbot_192.png',
          image_512: 'https://a.slack-edge.com/7f796/img/slackbot/slackbot_512.png',
          status_text_canonical: '',
          team: 'TBPK3R7D5',
        },
        is_admin: false,
        is_owner: false,
        is_primary_owner: false,
        is_restricted: false,
        is_ultra_restricted: false,
        is_bot: false,
        is_app_user: false,
        updated: 0,
      },
      {
        id: 'UBNE1D2BV',
        team_id: 'TBPK3R7D5',
        name: 'ogunniyitunmise',
        deleted: false,
        color: '9f69e7',
        real_name: 'Tunmise Ogunniyi',
        tz: 'Africa/Algiers',
        tz_label: 'Central European Time',
        tz_offset: 3600,
        profile: {
          title: '',
          phone: '',
          skype: '',
          real_name: 'Tunmise Ogunniyi',
          real_name_normalized: 'Tunmise Ogunniyi',
          display_name: 'Tunm',
          display_name_normalized: 'Tunm',
          status_text: '',
          status_emoji: '',
          status_expiration: 0,
          avatar_hash: 'g9d9ad294bfe',
          email: 'ogunniyitunmise@gmail.com',
          first_name: 'Tunmise',
          last_name: 'Ogunniyi',
          image_24:
            'https://secure.gravatar.com/avatar/9d9ad294bfe088279ebb1c071f7b789a.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0010-24.png',
          image_32:
            'https://secure.gravatar.com/avatar/9d9ad294bfe088279ebb1c071f7b789a.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0010-32.png',
          image_48:
            'https://secure.gravatar.com/avatar/9d9ad294bfe088279ebb1c071f7b789a.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0010-48.png',
          image_72:
            'https://secure.gravatar.com/avatar/9d9ad294bfe088279ebb1c071f7b789a.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0010-72.png',
          image_192:
            'https://secure.gravatar.com/avatar/9d9ad294bfe088279ebb1c071f7b789a.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0010-192.png',
          image_512:
            'https://secure.gravatar.com/avatar/9d9ad294bfe088279ebb1c071f7b789a.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0010-512.png',
          status_text_canonical: '',
          team: 'TBPK3R7D5',
        },
        is_admin: true,
        is_owner: true,
        is_primary_owner: true,
        is_restricted: false,
        is_ultra_restricted: false,
        is_bot: false,
        is_app_user: false,
        updated: 1548416468,
        has_2fa: false,
      },
      {
        id: 'UBQ31C11N',
        team_id: 'TBPK3R7D5',
        name: 'tunmise.ogunniyi',
        deleted: false,
        color: '4bbe2e',
        real_name: 'Tunmise Andela',
        tz: 'Africa/Algiers',
        tz_label: 'Central European Time',
        tz_offset: 3600,
        profile: {
          title: '',
          phone: '',
          skype: '',
          real_name: 'Tunmise Andela',
          real_name_normalized: 'Tunmise Andela',
          display_name: 'Tunmise',
          display_name_normalized: 'Tunmise',
          status_text: '',
          status_emoji: '',
          status_expiration: 0,
          avatar_hash: 'g6a3c7f234ea',
          email: 'tunmise.ogunniyi@andela.com',
          first_name: 'Tunmise',
          last_name: 'Andela',
          image_24:
            'https://secure.gravatar.com/avatar/6a3c7f234ea7e39e97b08edb18d14a97.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0006-24.png',
          image_32:
            'https://secure.gravatar.com/avatar/6a3c7f234ea7e39e97b08edb18d14a97.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0006-32.png',
          image_48:
            'https://secure.gravatar.com/avatar/6a3c7f234ea7e39e97b08edb18d14a97.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0006-48.png',
          image_72:
            'https://secure.gravatar.com/avatar/6a3c7f234ea7e39e97b08edb18d14a97.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0006-72.png',
          image_192:
            'https://secure.gravatar.com/avatar/6a3c7f234ea7e39e97b08edb18d14a97.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0006-192.png',
          image_512:
            'https://secure.gravatar.com/avatar/6a3c7f234ea7e39e97b08edb18d14a97.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0006-512.png',
          status_text_canonical: '',
          team: 'TBPK3R7D5',
        },
        is_admin: false,
        is_owner: false,
        is_primary_owner: false,
        is_restricted: false,
        is_ultra_restricted: false,
        is_bot: false,
        is_app_user: false,
        updated: 1548416614,
        has_2fa: false,
      },
      {
        id: 'UBR27BX4Z',
        team_id: 'TBPK3R7D5',
        name: 'esa_bot',
        deleted: true,
        profile: {
          title: '',
          phone: '',
          skype: '',
          real_name: 'esa_bot',
          real_name_normalized: 'esa_bot',
          display_name: '',
          display_name_normalized: '',
          status_text: '',
          status_emoji: '',
          status_expiration: 0,
          avatar_hash: '7836b2ab93f7',
          bot_id: 'BBRBEDURJ',
          api_app_id: 'ABRBCJE1J',
          always_active: false,
          image_original:
            'https://avatars.slack-edge.com/2018-07-16/399770426229_7836b2ab93f7570d3f53_original.png',
          image_24:
            'https://avatars.slack-edge.com/2018-07-16/399770426229_7836b2ab93f7570d3f53_24.png',
          image_32:
            'https://avatars.slack-edge.com/2018-07-16/399770426229_7836b2ab93f7570d3f53_32.png',
          image_48:
            'https://avatars.slack-edge.com/2018-07-16/399770426229_7836b2ab93f7570d3f53_48.png',
          image_72:
            'https://avatars.slack-edge.com/2018-07-16/399770426229_7836b2ab93f7570d3f53_72.png',
          image_192:
            'https://avatars.slack-edge.com/2018-07-16/399770426229_7836b2ab93f7570d3f53_192.png',
          image_512:
            'https://avatars.slack-edge.com/2018-07-16/399770426229_7836b2ab93f7570d3f53_512.png',
          image_1024:
            'https://avatars.slack-edge.com/2018-07-16/399770426229_7836b2ab93f7570d3f53_1024.png',
          status_text_canonical: '',
          team: 'TBPK3R7D5',
        },
        is_bot: true,
        is_app_user: false,
        updated: 1547550386,
      },
      {
        id: 'UBSKEAUP9',
        team_id: 'TBPK3R7D5',
        name: 'luke.olali',
        deleted: false,
        color: 'e7392d',
        real_name: 'Luke Olali',
        tz: 'Africa/Nairobi',
        tz_label: 'East Africa Time',
        tz_offset: 10800,
        profile: {
          title: '',
          phone: '',
          skype: '',
          real_name: 'Luke Olali',
          real_name_normalized: 'Luke Olali',
          display_name: 'luke',
          display_name_normalized: 'luke',
          status_text: '',
          status_emoji: '',
          status_expiration: 0,
          avatar_hash: 'g2eb8f32b6f2',
          email: 'luke.olali@andela.com',
          image_24:
            'https://secure.gravatar.com/avatar/2eb8f32b6f240c29be120f4994c98f44.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0025-24.png',
          image_32:
            'https://secure.gravatar.com/avatar/2eb8f32b6f240c29be120f4994c98f44.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0025-32.png',
          image_48:
            'https://secure.gravatar.com/avatar/2eb8f32b6f240c29be120f4994c98f44.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0025-48.png',
          image_72:
            'https://secure.gravatar.com/avatar/2eb8f32b6f240c29be120f4994c98f44.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0025-72.png',
          image_192:
            'https://secure.gravatar.com/avatar/2eb8f32b6f240c29be120f4994c98f44.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0025-192.png',
          image_512:
            'https://secure.gravatar.com/avatar/2eb8f32b6f240c29be120f4994c98f44.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0025-512.png',
          status_text_canonical: '',
          team: 'TBPK3R7D5',
        },
        is_admin: false,
        is_owner: false,
        is_primary_owner: false,
        is_restricted: false,
        is_ultra_restricted: false,
        is_bot: false,
        is_app_user: false,
        updated: 1531784296,
        has_2fa: false,
      },
      {
        id: 'UBSKH2ANQ',
        team_id: 'TBPK3R7D5',
        name: 'mugapedia',
        deleted: false,
        color: '674b1b',
        real_name: 'Alchemist',
        tz: 'Africa/Nairobi',
        tz_label: 'East Africa Time',
        tz_offset: 10800,
        profile: {
          title: '',
          phone: '',
          skype: '',
          real_name: 'Alchemist',
          real_name_normalized: 'Alchemist',
          display_name: 'alchemist',
          display_name_normalized: 'alchemist',
          status_text: '',
          status_emoji: '',
          status_expiration: 0,
          avatar_hash: 'gb8b063ad15f',
          email: 'mugapedia@gmail.com',
          image_24:
            'https://secure.gravatar.com/avatar/b8b063ad15fc40e22612002e7f0a5ecf.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0013-24.png',
          image_32:
            'https://secure.gravatar.com/avatar/b8b063ad15fc40e22612002e7f0a5ecf.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0013-32.png',
          image_48:
            'https://secure.gravatar.com/avatar/b8b063ad15fc40e22612002e7f0a5ecf.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0013-48.png',
          image_72:
            'https://secure.gravatar.com/avatar/b8b063ad15fc40e22612002e7f0a5ecf.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0013-72.png',
          image_192:
            'https://secure.gravatar.com/avatar/b8b063ad15fc40e22612002e7f0a5ecf.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0013-192.png',
          image_512:
            'https://secure.gravatar.com/avatar/b8b063ad15fc40e22612002e7f0a5ecf.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0013-512.png',
          status_text_canonical: '',
          team: 'TBPK3R7D5',
        },
        is_admin: false,
        is_owner: false,
        is_primary_owner: false,
        is_restricted: false,
        is_ultra_restricted: false,
        is_bot: false,
        is_app_user: false,
        updated: 1531935172,
        has_2fa: false,
      },
      {
        id: 'UBTTG5JM9',
        team_id: 'TBPK3R7D5',
        name: 'geoffrey.muchai',
        deleted: false,
        color: 'e0a729',
        real_name: 'Geoffrey Muchai',
        tz: 'Africa/Nairobi',
        tz_label: 'East Africa Time',
        tz_offset: 10800,
        profile: {
          title: '',
          phone: '',
          skype: '',
          real_name: 'Geoffrey Muchai',
          real_name_normalized: 'Geoffrey Muchai',
          display_name: 'geoffrey',
          display_name_normalized: 'geoffrey',
          status_text: '',
          status_emoji: '',
          status_expiration: 0,
          avatar_hash: 'g96aeb002922',
          email: 'geoffrey.muchai@andela.com',
          image_24:
            'https://secure.gravatar.com/avatar/96aeb0029224c36ddb33c35c89bff4a3.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0020-24.png',
          image_32:
            'https://secure.gravatar.com/avatar/96aeb0029224c36ddb33c35c89bff4a3.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0020-32.png',
          image_48:
            'https://secure.gravatar.com/avatar/96aeb0029224c36ddb33c35c89bff4a3.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0020-48.png',
          image_72:
            'https://secure.gravatar.com/avatar/96aeb0029224c36ddb33c35c89bff4a3.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0020-72.png',
          image_192:
            'https://secure.gravatar.com/avatar/96aeb0029224c36ddb33c35c89bff4a3.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0020-192.png',
          image_512:
            'https://secure.gravatar.com/avatar/96aeb0029224c36ddb33c35c89bff4a3.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0020-512.png',
          status_text_canonical: '',
          team: 'TBPK3R7D5',
        },
        is_admin: false,
        is_owner: false,
        is_primary_owner: false,
        is_restricted: false,
        is_ultra_restricted: false,
        is_bot: false,
        is_app_user: false,
        updated: 1532080230,
        has_2fa: false,
      },
      {
        id: 'UBVAMQJ30',
        team_id: 'TBPK3R7D5',
        name: 'brian.marika',
        deleted: false,
        color: 'e96699',
        real_name: 'Marika',
        tz: 'Africa/Nairobi',
        tz_label: 'East Africa Time',
        tz_offset: 10800,
        profile: {
          title: '',
          phone: '',
          skype: '',
          real_name: 'Marika',
          real_name_normalized: 'Marika',
          display_name: '',
          display_name_normalized: '',
          status_text: '',
          status_emoji: '',
          status_expiration: 0,
          avatar_hash: 'gcfe529a21ad',
          email: 'brian.marika@andela.com',
          image_24:
            'https://secure.gravatar.com/avatar/cfe529a21ad86761ec992252e71a022c.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0018-24.png',
          image_32:
            'https://secure.gravatar.com/avatar/cfe529a21ad86761ec992252e71a022c.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0018-32.png',
          image_48:
            'https://secure.gravatar.com/avatar/cfe529a21ad86761ec992252e71a022c.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0018-48.png',
          image_72:
            'https://secure.gravatar.com/avatar/cfe529a21ad86761ec992252e71a022c.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0018-72.png',
          image_192:
            'https://secure.gravatar.com/avatar/cfe529a21ad86761ec992252e71a022c.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0018-192.png',
          image_512:
            'https://secure.gravatar.com/avatar/cfe529a21ad86761ec992252e71a022c.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0018-512.png',
          status_text_canonical: '',
          team: 'TBPK3R7D5',
        },
        is_admin: false,
        is_owner: false,
        is_primary_owner: false,
        is_restricted: false,
        is_ultra_restricted: false,
        is_bot: false,
        is_app_user: false,
        updated: 1532076995,
        has_2fa: false,
      },
      {
        id: 'UE4910GEQ',
        team_id: 'TBPK3R7D5',
        name: 'kelvin.kariuki',
        deleted: false,
        color: '5b89d5',
        real_name: 'Kelvin',
        tz: 'Africa/Nairobi',
        tz_label: 'East Africa Time',
        tz_offset: 10800,
        profile: {
          title: '',
          phone: '',
          skype: '',
          real_name: 'Kelvin',
          real_name_normalized: 'Kelvin',
          display_name: 'Kariuki',
          display_name_normalized: 'Kariuki',
          status_text: '',
          status_emoji: '',
          status_expiration: 0,
          avatar_hash: 'g93c98501c5c',
          email: 'kelvin.kariuki@andela.com',
          image_24:
            'https://secure.gravatar.com/avatar/93c98501c5c2965b89aa081307d611c9.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0003-24.png',
          image_32:
            'https://secure.gravatar.com/avatar/93c98501c5c2965b89aa081307d611c9.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0003-32.png',
          image_48:
            'https://secure.gravatar.com/avatar/93c98501c5c2965b89aa081307d611c9.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0003-48.png',
          image_72:
            'https://secure.gravatar.com/avatar/93c98501c5c2965b89aa081307d611c9.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0003-72.png',
          image_192:
            'https://secure.gravatar.com/avatar/93c98501c5c2965b89aa081307d611c9.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0003-192.png',
          image_512:
            'https://secure.gravatar.com/avatar/93c98501c5c2965b89aa081307d611c9.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0003-512.png',
          status_text_canonical: '',
          team: 'TBPK3R7D5',
        },
        is_admin: false,
        is_owner: false,
        is_primary_owner: false,
        is_restricted: false,
        is_ultra_restricted: false,
        is_bot: false,
        is_app_user: false,
        updated: 1542285157,
        has_2fa: false,
      },
      {
        id: 'UE4CN0ZJB',
        team_id: 'TBPK3R7D5',
        name: 'collins.muru',
        deleted: false,
        color: '684b6c',
        real_name: 'Collins',
        tz: 'Africa/Nairobi',
        tz_label: 'East Africa Time',
        tz_offset: 10800,
        profile: {
          title: '',
          phone: '',
          skype: '',
          real_name: 'Collins',
          real_name_normalized: 'Collins',
          display_name: 'njau',
          display_name_normalized: 'njau',
          status_text: '',
          status_emoji: '',
          status_expiration: 0,
          avatar_hash: 'ge3a237a70e1',
          email: 'collins.muru@andela.com',
          image_24:
            'https://secure.gravatar.com/avatar/e3a237a70e19c1f53e6b9eeebf0aa7b8.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0008-24.png',
          image_32:
            'https://secure.gravatar.com/avatar/e3a237a70e19c1f53e6b9eeebf0aa7b8.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0008-32.png',
          image_48:
            'https://secure.gravatar.com/avatar/e3a237a70e19c1f53e6b9eeebf0aa7b8.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0008-48.png',
          image_72:
            'https://secure.gravatar.com/avatar/e3a237a70e19c1f53e6b9eeebf0aa7b8.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0008-72.png',
          image_192:
            'https://secure.gravatar.com/avatar/e3a237a70e19c1f53e6b9eeebf0aa7b8.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0008-192.png',
          image_512:
            'https://secure.gravatar.com/avatar/e3a237a70e19c1f53e6b9eeebf0aa7b8.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0008-512.png',
          status_text_canonical: '',
          team: 'TBPK3R7D5',
        },
        is_admin: true,
        is_owner: true,
        is_primary_owner: false,
        is_restricted: false,
        is_ultra_restricted: false,
        is_bot: false,
        is_app_user: false,
        updated: 1542637875,
        has_2fa: false,
      },
      {
        id: 'UEQ0H378D',
        team_id: 'TBPK3R7D5',
        name: 'anaeze.nsoffor',
        deleted: false,
        color: '2b6836',
        real_name: 'anaeze',
        tz: 'Africa/Algiers',
        tz_label: 'Central European Time',
        tz_offset: 3600,
        profile: {
          title: '',
          phone: '',
          skype: '',
          real_name: 'anaeze',
          real_name_normalized: 'anaeze',
          display_name: 'anaeze',
          display_name_normalized: 'anaeze',
          status_text: '',
          status_emoji: '',
          status_expiration: 0,
          avatar_hash: 'ge7e13364343',
          email: 'anaeze.nsoffor@andela.com',
          image_24:
            'https://secure.gravatar.com/avatar/e7e133643433be97f8045eeae5598211.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0016-24.png',
          image_32:
            'https://secure.gravatar.com/avatar/e7e133643433be97f8045eeae5598211.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0016-32.png',
          image_48:
            'https://secure.gravatar.com/avatar/e7e133643433be97f8045eeae5598211.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0016-48.png',
          image_72:
            'https://secure.gravatar.com/avatar/e7e133643433be97f8045eeae5598211.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0016-72.png',
          image_192:
            'https://secure.gravatar.com/avatar/e7e133643433be97f8045eeae5598211.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0016-192.png',
          image_512:
            'https://secure.gravatar.com/avatar/e7e133643433be97f8045eeae5598211.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0016-512.png',
          status_text_canonical: '',
          team: 'TBPK3R7D5',
        },
        is_admin: false,
        is_owner: false,
        is_primary_owner: false,
        is_restricted: false,
        is_ultra_restricted: false,
        is_bot: false,
        is_app_user: false,
        updated: 1544449339,
        has_2fa: false,
      },
      {
        id: 'UEVCR1T3M',
        team_id: 'TBPK3R7D5',
        name: 'ademola.ariya',
        deleted: false,
        color: '99a949',
        real_name: 'Ademola Ariya',
        tz: 'Africa/Algiers',
        tz_label: 'Central European Time',
        tz_offset: 3600,
        profile: {
          title: '',
          phone: '',
          skype: '',
          real_name: 'Ademola Ariya',
          real_name_normalized: 'Ademola Ariya',
          display_name: 'Demola',
          display_name_normalized: 'Demola',
          status_text: '',
          status_emoji: '',
          status_expiration: 0,
          avatar_hash: 'g3bf0f9fca42',
          email: 'ademola.ariya@andela.com',
          first_name: 'Ademola',
          last_name: 'Ariya',
          image_24:
            'https://secure.gravatar.com/avatar/3bf0f9fca42d946a3ce8f4e08f839245.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0022-24.png',
          image_32:
            'https://secure.gravatar.com/avatar/3bf0f9fca42d946a3ce8f4e08f839245.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0022-32.png',
          image_48:
            'https://secure.gravatar.com/avatar/3bf0f9fca42d946a3ce8f4e08f839245.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0022-48.png',
          image_72:
            'https://secure.gravatar.com/avatar/3bf0f9fca42d946a3ce8f4e08f839245.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0022-72.png',
          image_192:
            'https://secure.gravatar.com/avatar/3bf0f9fca42d946a3ce8f4e08f839245.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0022-192.png',
          image_512:
            'https://secure.gravatar.com/avatar/3bf0f9fca42d946a3ce8f4e08f839245.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0022-512.png',
          status_text_canonical: '',
          team: 'TBPK3R7D5',
        },
        is_admin: false,
        is_owner: false,
        is_primary_owner: false,
        is_restricted: false,
        is_ultra_restricted: false,
        is_bot: false,
        is_app_user: false,
        updated: 1545038772,
        has_2fa: false,
      },
      {
        id: 'UFJR27XRU',
        team_id: 'TBPK3R7D5',
        name: 'esa-app',
        deleted: true,
        profile: {
          title: '',
          phone: '',
          skype: '',
          real_name: 'esa-app',
          real_name_normalized: 'esa-app',
          display_name: '',
          display_name_normalized: '',
          status_text: '',
          status_emoji: '',
          status_expiration: 0,
          avatar_hash: 'g2442049abec',
          bot_id: 'BFGLJG9NU',
          api_app_id: 'ABPK4J08P',
          always_active: true,
          first_name: 'esa-app',
          last_name: '',
          image_24:
            'https://secure.gravatar.com/avatar/2442049abecb15843e1bc5a2d9bcf0d6.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0013-24.png',
          image_32:
            'https://secure.gravatar.com/avatar/2442049abecb15843e1bc5a2d9bcf0d6.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0013-32.png',
          image_48:
            'https://secure.gravatar.com/avatar/2442049abecb15843e1bc5a2d9bcf0d6.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0013-48.png',
          image_72:
            'https://secure.gravatar.com/avatar/2442049abecb15843e1bc5a2d9bcf0d6.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0013-72.png',
          image_192:
            'https://secure.gravatar.com/avatar/2442049abecb15843e1bc5a2d9bcf0d6.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0013-192.png',
          image_512:
            'https://secure.gravatar.com/avatar/2442049abecb15843e1bc5a2d9bcf0d6.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F00b63%2Fimg%2Favatars%2Fava_0013-512.png',
          status_text_canonical: '',
          team: 'TBPK3R7D5',
        },
        is_bot: true,
        is_app_user: false,
        updated: 1548198161,
      },
    ],
    cache_ts: 1549283937,
    response_metadata: {
      next_cursor: '',
    },
  },
};

export default slackMocks;

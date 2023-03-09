module.exports = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'ClayStack Foundation',
      items: [
        'claystack/introduction',
        // 'claystack/tokenomics',
      ],
    },
    {
      type: 'category',
      label: 'ClayMatic',
      items: [
          'claymatic/overview',
          'claymatic/architecture',
          'claymatic/csmatic',
          'claymatic/polygon',
          'claymatic/autobalancer',
          'claymatic/fees',
          'claymatic/limits',
      ],
    },
    {
      type: 'category',
      label: 'Sonic',
      items: [
        'sonic/overview',
        'sonic/architecture',
        'sonic/fees',
      ],
    },
    {
      type: 'category',
      label: 'Contracts',
      items: [
        'contracts/claymatic',
        'contracts/claymanager',
        'contracts/sonic',
        'contracts/cstoken',
        'contracts/rolemanager',
        'contracts/timelock',
      ],
    },
    'security',
    'deployed-contracts',
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/staking',
        'faq/claymatic',
        'faq/claystack',
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      items: [
        'devs/sonic',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/staking',
        // 'guides/node-operators',
      ],
    },
    'victoria',
  ],
}

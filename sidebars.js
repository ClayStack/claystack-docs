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
      'architecture',
    {
      type: 'category',
      label: 'ClayMatic',
      items: [
          'claymatic/overview',
          'claymatic/csmatic',
          'claymatic/polygon',
          'claymatic/autobalancer',
          'claymatic/fees',
          'claymatic/limits',
      ],
    },
    {
      type: 'category',
      label: 'Contracts',
      items: [
        'contracts/claymatic',
        'contracts/claymanager',
        'contracts/cstoken',
        'contracts/rolemanager',
        'contracts/timelock',
      ],
    },
    'security',
    'deployed-contracts',
    'victoria',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/staking',
        // 'guides/node-operators',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/staking',
        'faq/claymatic',
        'faq/claystack',
      ],
    },
  ],
}

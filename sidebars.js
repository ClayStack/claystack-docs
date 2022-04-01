module.exports = {
  docs: [
    'introduction',
    // 'claystack',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/staking',
        // 'guides/node-operators',
      ],
    },
      'architecture',
    {
      type: 'category',
      label: 'ClayMatic',
      items: [
          'claymatic/overview',
          'claymatic/csmatic',
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
      label: 'FAQ',
      items: [
        'faq/staking',
        'faq/claymatic',
        'faq/claystack',
      ],
    },
  ],
}

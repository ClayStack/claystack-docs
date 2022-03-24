module.exports = {
  docs: [
    'introduction',
    'claystack',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/staking',
        'guides/node-operators',
      ],
    },
    {
      type: 'category',
      label: 'ClayMatic',
      items: [
          'claymatic/overview',
          'claymatic/csmatic',
          'claymatic/autobalancer',
          'claymatic/rewards',
          'claymatic/fees',
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
  ],
}

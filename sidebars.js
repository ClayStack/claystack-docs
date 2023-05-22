module.exports = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'csETH',
      items: [
        'cseth/overview',
        'cseth/architecture',
        'cseth/dvt',
        'cseth/vfp',
        'cseth/litepaper',
//         {
//           type: 'category',
//           label: 'Node Operators',
//           items: [
//             'cseth/operators/overview',
//             'cseth/operators/ssv',
//             'cseth/operators/obol',
//           ],
//           collapsed: false
//         },
        'cseth/faq',
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'csMATIC',
      items: [
          'csmatic/overview',
          'csmatic/architecture',
          'csmatic/csmatic',
          'csmatic/polygon',
          'csmatic/autobalancer',
          'csmatic/fees',
          'csmatic/limits',
        {
          type: 'category',
          label: 'Contracts',
          items: [
            'csmatic/contracts/claymatic',
            'csmatic/contracts/claymanager',
            'csmatic/contracts/cstoken',
            'csmatic/contracts/rolemanager',
            'csmatic/contracts/timelock',
          ],
        },
          'csmatic/deployed-contracts',
          'csmatic/faq',
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Sonic',
      items: [
        'sonic/overview',
        'sonic/architecture',
        'sonic/fees',
        'sonic/sonic',
      ],
    },
    'security',
    {
      type: 'category',
      label: 'Developers',
      items: [
        'devs/sonic',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Guides',
    //   items: [
    //     'guides/staking',
    //     // 'guides/node-operators',
    //   ],
    // },
    'testnet',
    {
      type: 'category',
      label: 'ClayStack DAO',
      items: [
        'claystack/introduction',
        // 'claystack/tokenomics',
      ],
    },
  ],
}

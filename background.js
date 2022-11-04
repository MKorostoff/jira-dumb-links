chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [
    {
      'id': 1337,
      'action': {'type': 'block'},
      'condition': {'urlFilter': 'https://*.atlassian.net/gateway/api/object-resolver/check'}
    },
    {
      'id': 1338,
      'action': {'type': 'block'},
      'condition': {'urlFilter': 'https://*.atlassian.net/gateway/api/object-resolver/providers'}
    },
    {
      'id': 1339,
      'action': {'type': 'block'},
      'condition': {'urlFilter': 'https://*.atlassian.net/gateway/api/object-resolver/resolve'}
    }
  ],
})

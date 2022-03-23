module.exports = (client) => {
  const statusOptions = [
        'Version Beta 1.2',
        'Almost Beta 1.3'
    ];
  let counter = 0;

  const updateStatus = () => {
    client.user?.setPresence({
      status: 'online',
      activities: [
        {
          name: statusOptions[counter],
                },
            ],
    });

    if (++counter >= statusOptions.length) {
      counter = 0;
    }
    setTimeout(updateStatus, 1000 * 60 * 5);
  };
  updateStatus();
};

module.exports.config = {
  dbName: 'STATUS_CHANGER',
  displayName: 'Status Changer',
};
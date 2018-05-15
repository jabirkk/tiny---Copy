document.addEventListener('deviceready', function () {
    // Enable to debug issues.
    // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
    
    var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
  
    window.plugins.OneSignal
      .startInit("665375c3-0c60-4885-bf9b-0440c313bc62")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();
  }, false);
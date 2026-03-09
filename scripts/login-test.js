// Login Test Script
// Author: Tulika Dutta
// Description: Sample automation script to validate login functionality
// Tool: TestComplete

function loginTest() {

  Log.Message("Starting Login Test");
  launchApplication();
  enterCredentials("testuser", "password123");
  clickLogin();
  verifyLogin();
  Log.Message("Login Test Completed Successfully");
}


// Launch application
function launchApplication() {
  Log.Message("Launching application");
  TestedApps.App123.Run();
  Delay(3000);
}


// Enter username and password
function enterCredentials(username, password) {
  Log.Message("Entering login credentials");
  var app = Sys.Process("App123");

  app.Window("LoginForm")
     .Window("UsernameTextbox")
     .SetText(username);

  app.Window("LoginForm")
     .Window("PasswordTextbox")
     .SetText(password);

}


// Click login button
function clickLogin() {
  Log.Message("Clicking login button");
  var app = Sys.Process("SampleApp");
  app.Window("LoginForm")
     .Window("LoginButton")
     .Click();
}


// Validate login success
function verifyLogin() {
  Log.Message("Verifying login result");
  var app = Sys.Process("SampleApp");
  if(app.Window("MainDashboard").Exists)
  {
      Log.Message("Login Successful");
  }
  else
  {
      Log.Error("Login Failed");
  }
}

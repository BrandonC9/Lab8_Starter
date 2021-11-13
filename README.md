# Lab 8 - Starter

Name: Brandon Chen

##### Understanding Questions

1) Tests shoud fit within a Github action that run whenever code is pushed. This way, all code that gets pushed to repo is ensured to have expected functionality. Additionally, tests should be in a Github action so that all contributors can see what happens in each test.
2) No, in this case we would not use E2E testing. E2E simulates user actions, and a user won't check if a specific function retuns the correct output.
3) I would not use a unit test to test the "message" feature of the messaging app. This is testing something at the application level, which involves multiple functions, such as writing the text and then sending the actual message to the other user.
4) I would use a unit test to test the "max message length" feature. This tests a more specific function of code, and shouldn't affect other parts of the code.
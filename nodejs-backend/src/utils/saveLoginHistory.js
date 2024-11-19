module.exports = async function saveLoginHistory(context) {
  console.log("saveLoginHistory hook triggered");

  // Prevent the hook from running within the loginHistory service to avoid loop
  if (context.path === "loginHistory") {
    return context;
  }

  // Retrieve userId from context.params.user after successful authentication
  const userId = context.params.user?._id;

  if (!userId) {
    console.log("No user ID found in context after login");
    return context;
  }

  console.log(`Logging history for user with _id: ${userId}`);

  try {
    // Create the login history record
    await context.app.service("loginHistory").create({
      userId,
      loginTime: new Date(), // Optional: Add timestamp for login
    });

    console.log("Login history saved");
  } catch (error) {
    console.error("Error saving login history:", error);
  }

  return context;
};

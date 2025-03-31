const { Router } = require("express");
const User = require("../models/user");


const router = Router();

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);

    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect Email or Password",
    });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token").redirect("/");
});

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // Render the signup page with an error message
      return res.render("signup", {
        error: "User with this email already exists",
      });
    }

    // Create a new user if no existing user found
    await User.create({
      fullName,
      email,
      password,
    });

    // Redirect to the home page after successful signup
    return res.redirect("/");
  } catch (error) {
    // Handle any unexpected errors
    console.error("Signup Error:", error.message);
    return res.render("signup", {
      error: "Something went wrong. Please try again later.",
    });
  }
});

module.exports = router;

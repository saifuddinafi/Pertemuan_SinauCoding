<script setup>
import ilustratorImage from './assets/Ilustrator.svg'
import twitterImage from './assets/Logo Twitter.svg'
import googleImage from './assets/Logo Google.svg'
import appleImage from './assets/Logo Apple.svg'
</script>


<template>
  
    <div class="left-side">
        <img :src="twitterImage" alt="Twitter Logo" class="logo">
        <h1>Welcome to Twitter</h1>
        <p>Happening now, join twitter today</p>
        <img :src="ilustratorImage" alt="Illustration" class="illustration">
    </div>
    <div class="right-side">
        <div class="header">
            <img :src="twitterImage" alt="Twitter Logo" class="logo">
            <div class="sign-up">
                Don't have an account? <a href="./index.html">Sign Up</a>
            </div>
        </div>
        <h1 class="login">Log in to Twitter</h1>
        <p class="login-twitter">Enter Twitter Account</p>
        <label class="input-textpass">
            <input type="text" placeholder="Phone, email or username" name="username" id="username" autocomplete="username">
            <input type="password" placeholder="Password" name="password" id="password" autocomplete="current-password">
        </label>
        <div class="forgot-password">
            <a href="./index.html">Forgot password?</a>
        </div>
        <a href="./index.html" >
            <button class="sign-in">Sign In</button>
        </a>
        <div class="or">or</div>
        <div class="social-login">
            <a href="https://accounts.google.com/login?hl=in" >
                <button class="sign-google"><img :src="googleImage" alt="Google Logo" width="20px" height="20px">Sign in with Google</button>
            </a>
            <a href="https://support.apple.com/id-id/111001" >
                <button class="sign-apple"><img :src="appleImage" width="20px" height="20px" alt="Apple Logo">Sign in with Apple</button>
            </a>
        </div>
    </div>  
</template>

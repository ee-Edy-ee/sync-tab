<template>
    <div class="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
            <h2 class="text-center">Sign in</h2>
            <div class="form-group mb-2">
                <div class="input-group">
                    <input type="text" class="form-control" name="username" placeholder="Username" required="required" />
                </div>
            </div>
            <div class="form-group mb-2">
                <div class="input-group">
                    <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
                </div>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary login-btn btn-block" v-ripple>Sign in</button>
            </div>
            <div class="clearfix">
                <label class="float-left form-check-label"><input type="checkbox" /> Remember me</label>
                <a href="#" class="float-right">Forgot Password?</a>
            </div>
            <div class="or-seperator"><i>or</i></div>
            <p class="text-center">Login with your social media account</p>
            <div class="text-center d-flex align-self-center justify-content-center gap-2">
                <a href="#" class="btn btn-black" v-ripple @click="loginWithGitHub"><github />&nbsp;Github</a>
                <a href="#" class="btn btn-danger" v-ripple @click="loginWithGoogle"><google />&nbsp;Google</a>
            </div>
        </form>
        <p class="text-center text-muted small">Don't have an account? <a href="#">Sign up here!</a></p>
    </div>
</template>

<script>
import { Google, Github } from "mdue";
import { auth, googleAuthProvider, githubAuthProvider } from "@/util/firebase";

export default {
    components: {
        Google,
        Github
    },
    setup() {
        function loginWithGoogle() {
            auth.signInWithPopup(googleAuthProvider)
                .then(function(result) {
                    const token = result.credential.accessToken;
                    const user = result.user;

                    console.log(token, user);
                })
                .catch(function(error) {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // const email = error.email;
                    // const credential = error.credential;
                    console.log(errorCode, errorMessage);
                });
        }
        function loginWithGitHub() {
            auth.signInWithPopup(githubAuthProvider)
                .then(function(result) {
                    const token = result.credential.accessToken;
                    const user = result.user;

                    console.log(token, user);
                })
                .catch(function(error) {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // const email = error.email;
                    // const credential = error.credential;
                    console.log(errorCode, errorMessage);
                });
        }
        return { loginWithGoogle, loginWithGitHub };
    }
};
</script>

<style lang="scss" scoped>
.login-form {
    width: 400px;
    margin: 30px auto;
}
</style>

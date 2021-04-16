export default {
    render() {
        const handleClickSignIn = () => {
            this.$gAuth.signIn()
                .then((r) => {
                    if (!r) {
                        return null;
                    }

                    const userAuth = r.getAuthResponse();
                    // this.$cookies.set('userSession', userAuth.access_token, new Date(userAuth.expires_at));
                    this.$cookies.set('userSession', userAuth.access_token, '30d');
                    this.$router.push('dashboard')
                })
                .catch((e) => {
                    console.error(e);
                    return null;
                });
        }

        return (
            <div class="mx-auto w-1/2 shadow-lg sm:rounded-3xl h-5/6 my-4">
                <div class="flex w-full h-full">
                    <div class="md:visible w-1/2 bg-red-600 rounded-l-3xl"></div>
                    <div class="w-full md:w-1/2 flex flex-col justify-center">
                        <h3 class="text-center my-2">Sign In</h3>
                        <button class="bg-red-500 text-white rounded-3xl px-3 py-2 rounded my-2 mx-4" onClick={handleClickSignIn}>Google</button>
                    </div>
                </div>
            </div>
        )
    }
}
<script>
    // https://stackoverflow.com/a/59847337/3019595
    async function send(event) {
        event.preventDefault()

        const { target: form } = event

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form)
            })

            console.log(response)

            const json = await response.json()

            console.log(json)
        } catch (error) {
            console.error(error)
        }
    }
</script>

<!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup" class="hidden bg-black">
    <form
        action="https://Slydisciple.us7.list-manage.com/subscribe/post?u=fc6e81b3722857cf8227d6608&amp;id=ea93069cec"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        novalidate
        on:submit={send}
    >
        <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address </label>
                <input
                    type="email"
                    value=""
                    name="EMAIL"
                    class="required email text-black"
                    id="mce-EMAIL"
                />
            </div>

            <div class="mc-field-group size1of2">
                <label for="mce-PHONE">Phone Number </label>
                <input type="text" name="PHONE" class="text-black" value="" id="mce-PHONE" />
            </div>

            <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none" />
                <div class="response" id="mce-success-response" style="display:none" />
            </div>

            <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input
                    type="text"
                    name="b_fc6e81b3722857cf8227d6608_ea93069cec"
                    tabindex="-1"
                    value=""
                />
            </div>
            <div class="clear">
                <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                />
            </div>
        </div>
    </form>
</div>

<!--End mc_embed_signup-->
<style>
    /* textarea {
        color: black;
    } */
</style>

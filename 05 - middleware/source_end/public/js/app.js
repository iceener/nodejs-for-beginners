new Vue({
    el: '.dog-app',
    data: {
        formLightbox: false,
        showFeedback: true
    },
    methods: {
        closeFeedbackLightbox() {
            this.showFeedback = false;
        }
    }
});
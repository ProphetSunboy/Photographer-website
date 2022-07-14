$("#form").parsley();
window.Parsley.addValidator("validateFullWidthCharacters", {
    requirementType: "string",
    validateString: function (value, requirement) {
        regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/gm;
        return regex.test(value);
    },
    messages: {
        en: "Please enter a valid email address.",
    },
});
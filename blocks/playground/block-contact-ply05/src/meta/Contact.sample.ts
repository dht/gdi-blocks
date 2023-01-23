export const sampleData: ISampleDataPerFlavour = {
    normal: {
        id: 'normal',
        strings: {
            header: 'CONTACT',
            inputBoxFirstRow: [
                { title: 'First Name', isRequired: false },
                { title: 'Last Name', isRequired: false },
            ],
            inputBoxSecondRow: [
                { title: 'Email', isRequired: true },
                { title: 'Subject', isRequired: false },
            ],
            messageTextBox: 'Message',
            button: 'Submit',
        },
        colors: {},
        extra: {
            contactDatasetId: 'myContact',
        },
    },
};

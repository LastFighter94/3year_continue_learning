declare namespace Cypress {
    interface Chainable {
        getDataTest(dataTestSelector: string): Chainable<JQuery<HTMLElement>>;
    }
}

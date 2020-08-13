// to start writing a test, we must use describe first
// inside you provide the first parameter as the title, 
// the second parameter is a callback function 

describe('Our first cypress test', () => {
    // now to write your tests, you write it() , or you could use specify()
    // the first parameter is the title of your test, and the second is a callback function
    // where you type your tests in

    // we want to actually let cypress visit our local host first where our app is, and then we can write tests 
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('adding text to inputs and submits form', () => {
        // below we correctly select the input field we want
        // now we want to type in it, to type we have the .type() method 
        // however, you just chain it after the thing you have selected
        cy.get('[data-cy="name"]').type('Chungus Mungus').should('have.value', "Chungus Mungus")

        // great with the above code we correctly type into the input field
        // now we want to assert to make sure our test is running how we want
        // to do so we chain .should() method after the actions we executed

        // now we do a test for the email input field

        cy.get('[data-cy="email"]').type('theChungusIsAMungus@gmail.com').should('have.value', 'theChungusIsAMungus@gmail.com')

        // if you don't like typing all of this in one line you can do it like so below (just uncomment it to see how it looks)
        // cy
        // .get('[data-cy="email"]')
        // .type('theChungusIsAMungus@gmail.com')
        // .should('have.value', 'theChungusIsAMungus@gmail.com')
        cy
        .get('[data-cy="motivation"]')
        .type('I really like to help')
        .should('have.value', 'I really like to help')

        // now we will cover how to select dropdown inputs
        // everything will basically be the same, except instead of .type()
        // we will use the .select() method passing inside as a string the value we
        // want to select from our dropdown input

        cy
        .get('[data-cy="positions"]')
        .select("Tabling")
        .should('have.value', "Tabling")

        // checking a box for testing will be the same except we use a different method 
        // we use the .check() method on the input we select 
        // to affirm it has been checked we don't have to do should('have.value')
        // instead we will just provide it should be checked like so
        // .should('be.checked') 

        cy.get('[data-cy="terms"]').check().should('be.checked')

        // now we will click on our submit button and watch it work its magic
        cy
        .get('[data-cy="btn"]')
        .click()

        // to run your test with cypress on your terminal, you will type in your terminal
        // making sure you closed the GUI 
        // npx cypress run

        // this command takes forever almost to run all the tests inside of cypres
        // but there is a way to just test the file you want
        // to do so you type in your terminal 
        // npx cypress run --spec "directory path of test file you wish to run"
        // for this example we will run 
        // npx cypress run --spec "cypress/integration/form_test.js"
    })


    // it('visits localhost', () => {
    //     // cy.visit tells cypress to visit a site, we pass the url inside of visit()
    //     cy.visit("http://localhost:3000")// this is a good first test, but to test our website
    // })
})
describe('The Todo App', () => {

    beforeEach(() => {
        cy.clearLocalStorage()
      })


    it('successfully loads', () => {
      cy.visit('/') // change URL to match your dev URL
    })

    it('adds a Todo to list', () => {
        cy.get('#todo-input').type("Test1")
        cy.get("#add-todo-button").click().should(() => {
            expect(localStorage.getItem('1')).to.eq('{"id":1,"text":"Test1","status":false}')
        })

        cy.get("#undone-list todo-item").should("have.length", 1)
    })

    it('marks Todo as done', () => {

        cy.get('#todo-input').type("Test1")
        cy.get("#add-todo-button").click()
        
        cy.get("ion-checkbox").first().click().should(() => {
            expect(localStorage.getItem('1')).to.eq('{"id":1,"text":"Test1","status":true}')
        })

        cy.get("#done-list-stable-elmt").click()

        cy.get("#undone-list todo-item").should("have.length", 0)
        cy.get("#done-list todo-item").should("have.length", 1)
    })

    it('marks Todo as undone', () => {
        // arrange
        cy.get('#todo-input').type("Test1")
        cy.get("#add-todo-button").click()
        cy.get("ion-checkbox").first().click()

        // act
        cy.get("ion-checkbox").first().click().should(() => {
            expect(localStorage.getItem('1')).to.eq('{"id":1,"text":"Test1","status":false}')
          
        })

        // assert
        cy.get("#undone-list todo-item").should("have.length", 1)
        cy.get("#done-list todo-item").should("have.length", 0)
    })

    it('deleted Todo from list', () => {
        cy.get('#todo-input').type("Test1")
        cy.get("#add-todo-button").click()
        cy.get("ion-item-option").first().click({ force: true })

        cy.get("#undone-list todo-item").should("have.length", 0)
    })
  })
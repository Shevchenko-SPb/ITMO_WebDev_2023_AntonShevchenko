import DOM from '../../src/constants/dom';

const SERVER_URL = 'http://localhost:4173/';

describe('Test Todo Page', () => {
  beforeEach(() => {
    cy.intercept('/**/TaskPopup**').as('getTaskPopup');
  });

  it.only('user open main page and create task', () => {
    cy.visit(SERVER_URL);

    cy.url().should('include', SERVER_URL);

    cy.get(`#${DOM.Popup.CONTAINER}`)
      .should('exist')
      .should('have.class', 'hidden');

    cy.get(`#${DOM.Popup.CONTAINER}`)
      .should('exist')
      .should('have.class', 'hidden')
      .find('.spinner')
      .should('exist');

    cy.get(`#${DOM.Button.CREATE_TASK}`)
      .should('exist')
      .should('contain.text', 'Create Task')
      .click();

    cy.wait('@getTaskPopup');

    const popupTask = cy.get('[data-test-id="task-popup"]')

const todoTaskText = 'Welcom Task'

      popupTask
        .find('[data-id="inpTitle"]')
      .should('exist')
      .should('be.visible','')
        .type(todoTaskText)

    cy.get('[data-id="btnConfirm"]')
      .should('exist')
      .should('contain.text', 'Create')
      .click()

    cy.get('[data-test-id="tasks-column"]')
      .should('exist')
      .children().should('have.length',2)
      .first()
      .find('[data-id="templateTaskTitle"]')
      .should("contain.text",todoTaskText)

  });
});

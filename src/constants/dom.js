const Dom = {
  Button: {
    ADD_ITEM: 'btnAddItem',
    CLOSE_POPUP: 'btnClosePopup',
    DELETE_ITEM: 'btnDeleteItem',
    CREATE_ITEM: 'btnCreateItem',
  },
  Template: {
    ITEM: 'templateInvoiceItem',
    Item: {
      ITEM_TITLE: '',
      ITEM_NAME: 'templateItemName',
      ITEM_DESCRIPTION: 'templateItemDescription',
      ITEM_COST: 'templateItemCost',
      ITEM_QTY: 'templateItemQty',
      ITEM_TOTAL: 'templateItemTotalCost',
    },
    Input: {
      NUMBER_INVOICE: 'invoiceNumber',
      IBAN: 'IBAN'
    },
    RESULT: 'templateInvoiceResult',
    Result: {
      RESULT_SUBTOTAL: 'templateItemSubtotal',
      RESULT_DISCOUNT: 'templateItemDiscount',
      RESULT_TOTAL: 'templateItemTotal',
      INPUT_DISCOUNT: 'templateInpDiscount',
    },
    INVOICE_NUMBER: 'invoiceNumber',
  },
  Popup: {
    CONTAINER: 'popupContainer',
  },
};

export default Dom;

import countObjectProperties from '../helpers/get-prop-count';

type RowData = {
  id: string,
  [key: string]: string,
};

export type TableProps<Type> = {
  title: string,
  columns: Type,
  rowsData: Type[],
<<<<<<< HEAD
  onDelete: (id: string) => void,
};

class Table<Type extends RowData> {
=======
};

class Table<Type extends RowData> {
  public htmlElement: HTMLTableElement;

>>>>>>> 39770f9105ecff6a19b29694c1c91a943be36349
  private props: TableProps<Type>;

  private tbody: HTMLTableSectionElement;

  private thead: HTMLTableSectionElement;

<<<<<<< HEAD
  public htmlElement: HTMLTableElement;

  public constructor(props: TableProps<Type>) {
    this.props = props;

=======
  public constructor(props: TableProps<Type>) {
    this.props = props;
>>>>>>> 39770f9105ecff6a19b29694c1c91a943be36349
    this.checkColumnsCompatability();

    this.htmlElement = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.initialize();
<<<<<<< HEAD
    this.renderView();
=======
>>>>>>> 39770f9105ecff6a19b29694c1c91a943be36349
  }

  private checkColumnsCompatability = (): void => {
    const { rowsData, columns } = this.props;

    if (this.props.rowsData.length === 0) return;
    const columnCount = countObjectProperties(columns);

    const columnsCompatableWithRowsData = rowsData.every((row) => {
      const rowCellsCount = countObjectProperties(row);

      return rowCellsCount === columnCount;
    });

    if (!columnsCompatableWithRowsData) {
      throw new Error('Nesutampa lentelės stulpelių skaičius su eilučių stulpelių skaičiumi');
    }
  };

<<<<<<< HEAD
  private initialize = (): void => {
    this.htmlElement.className = 'table table-striped order border p-3';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
  };

  private renderView = (): void => {
    this.renderHeadView();
    this.renderBodyView();
  };

  private renderHeadView = (): void => {
=======
  private initializeHead = (): void => {
>>>>>>> 39770f9105ecff6a19b29694c1c91a943be36349
    const { title, columns } = this.props;

    const headersArray = Object.values(columns);
    const headersRowHtmlString = headersArray.map((header) => `<th>${header}</th>`).join('');

    this.thead.innerHTML = `
      <tr>
        <th colspan="${headersArray.length}" class="text-center h3">${title}</th>
      </tr>
<<<<<<< HEAD
      <tr>${headersRowHtmlString}</tr>`;
  };

  private renderBodyView = (): void => {
=======
      <tr>${headersRowHtmlString}</tr>
    `;
  };

  private initializeBody = (): void => {
>>>>>>> 39770f9105ecff6a19b29694c1c91a943be36349
    const { rowsData, columns } = this.props;

    this.tbody.innerHTML = '';
    const rowsHtmlElements = rowsData
      .map((rowData) => {
        const rowHtmlElement = document.createElement('tr');

        const cellsHtmlString = Object.keys(columns)
          .map((key) => `<td>${rowData[key]}</td>`)
          .join(' ');

        rowHtmlElement.innerHTML = cellsHtmlString;

<<<<<<< HEAD
        this.addActionsCell(rowHtmlElement, rowData.id);

=======
>>>>>>> 39770f9105ecff6a19b29694c1c91a943be36349
        return rowHtmlElement;
      });

    this.tbody.append(...rowsHtmlElements);
  };

<<<<<<< HEAD
  private addActionsCell = (rowHtmlElement: HTMLTableRowElement, id: string): void => {
    const { onDelete } = this.props;

    const buttonCell = document.createElement('td');

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'btn btn-danger';
    deleteButton.addEventListener('click', () => onDelete(id));
    deleteButton.style.width = '80px';

    buttonCell.append(deleteButton);
    rowHtmlElement.append(buttonCell);
  };

  public updateProps = (newProps: Partial<TableProps<Type>>): void => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.renderView();
=======
  private initialize = (): void => {
    this.initializeHead();
    this.initializeBody();

    this.htmlElement.className = 'table table-striped order border p-3';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
>>>>>>> 39770f9105ecff6a19b29694c1c91a943be36349
  };
}

export default Table;

import { LightningElement } from 'lwc';
import generateData from './generateData';

const columns = [
	{ label: 'PROJECT/ASSIGNMENT', fieldName: 'name' },
	{ label: 'ADMIN HOUR', fieldName: 'website', type: 'url' },
	{ label: 'MON', fieldName: 'phone', type: 'phone' },
];

export default class BasicDatatable extends LightningElement {
	data = [];
	columns = columns;
	rowOffset = 0;

	connectedCallback() {
		this.data = generateData({ amountOfRecords: 100 });
	}

	increaseRowOffset() {
		this.rowOffset += 100;
	}
}

import { LightningElement } from 'lwc';
import generateData from './generateData';

const columns = [
	{
		label: 'PROJECT/ASSIGNMENT',
		fieldName: 'name'
	},
	{
		label: 'ADMIN HOUR',
		type: 'checkbox'
	},
	{
		label: 'MON',
		type: 'number'
	},
	{
		label: 'TUE',
		type: 'number'
	},
	{
		label: 'WED',
		type: 'number'
	},
	{
		label: 'THU',
		type: 'number'
	},
	{
		label: 'FRI',
		type: 'number'
	},
	{
		label: 'SAT',
		type: 'number'
	},
	{
		label: 'SUN',
		type: 'number'
	},
];

export default class BasicDatatable extends LightningElement {
	data = [];
	columns = columns;

	connectedCallback() {
		this.data = generateData({ amountOfRecords: 5 });
	}
}

import { LightningElement } from 'lwc';
import generateData from './generateData';

const date = new Date();
const dateTime = date.getDate() + '-' + date.getMonth();

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
		label: `MON ${dateTime}`,
		fieldName: '',
		type: 'number'
	},
	{
		label: 'TUE',
		fieldName: '',
		type: 'number'
	},
	{
		label: 'WED',
		fieldName: '',
		type: 'number'
	},
	{
		label: 'THU',
		fieldName: '',
		type: 'number'
	},
	{
		label: 'FRI',
		fieldName: '',
		type: 'number'
	},
	{
		label: 'SAT',
		fieldName: '',
		type: 'number'
	},
	{
		label: 'SUN',
		fieldName: '',
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

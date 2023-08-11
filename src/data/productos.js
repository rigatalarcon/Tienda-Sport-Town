//simulando una base de datos para que el cliente no modifique datos

export default {
	productos: [
		{
			id: '1',
			nombre: 'Tennis Converse Standard',
			descripcion: 'Bota Lona Chuck Taylor All Star.',
			precio: 25000.0,
			colores: ['negro', 'rojo', 'amarillo'],
			tamaños: ['36', '37', '38', '39', '40','41'],
		},
		{
			id: '2',
			nombre: 'Tennis Converse 2000',
			descripcion: 'Bota Lona All Star.',
			precio: 25000.0,
			colores: ['negro', 'rojo', 'amarillo'],
			tamaños: ['36', '37', '38', '39', '40','41'],
		},
	],
};

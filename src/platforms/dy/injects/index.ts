export default Object.values(import.meta.glob('./*.tsx', { eager: true, import: 'default' }));
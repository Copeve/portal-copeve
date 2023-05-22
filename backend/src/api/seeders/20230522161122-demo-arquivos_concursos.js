module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('Arquivos_concursos', [
            {
                titulo: 'arquivo x',
                link: 'link arquivo x',
                concurso: 1,
                tipo_arquivo: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'arquivo y',
                link: 'link arquivo y',
                concurso: 1,
                tipo_arquivo: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'arquivo z',
                link: 'link arquivo z',
                concurso: 1,
                tipo_arquivo: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'arquivo w',
                link: 'link arquivo w',
                concurso: 2,
                tipo_arquivo: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'arquivo t',
                link: 'link arquivo t',
                concurso: 2,
                tipo_arquivo: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'arquivo u',
                link: 'link arquivo u',
                concurso: 3,
                tipo_arquivo: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'arquivo m',
                link: 'link arquivo m',
                concurso: 3,
                tipo_arquivo: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'arquivo p',
                link: 'link arquivo p',
                concurso: 3,
                tipo_arquivo: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'arquivo m',
                link: 'link arquivo m',
                concurso: 4,
                tipo_arquivo: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'arquivo g',
                link: 'link arquivo g',
                concurso: 4,
                tipo_arquivo: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            
        ], {});
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('Arquivos_concursos', null, {});
    }
};

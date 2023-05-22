module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('Noticias', [
            {
                titulo: 'noticia x',
                corpo: 'corpo notícia x', 
                data_postagem: new Date(),
                data_atualizacao: new Date(),
                destaque: true,
                concurso: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'noticia y',
                corpo: 'corpo notícia y', 
                data_postagem: new Date(),
                data_atualizacao: new Date(),
                destaque: false,
                concurso: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'noticia z',
                corpo: 'corpo notícia z', 
                data_postagem: new Date(),
                data_atualizacao: new Date(),
                destaque: true,
                concurso: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'noticia w',
                corpo: 'corpo notícia w', 
                data_postagem: new Date(),
                data_atualizacao: new Date(),
                destaque: false,
                concurso: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'noticia u',
                corpo: 'corpo notícia u', 
                data_postagem: new Date(),
                data_atualizacao: new Date(),
                destaque: true,
                concurso: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'noticia f',
                corpo: 'corpo notícia f', 
                data_postagem: new Date(),
                data_atualizacao: new Date(),
                destaque: false,
                concurso: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'noticia g',
                corpo: 'corpo notícia g', 
                data_postagem: new Date(),
                data_atualizacao: new Date(),
                destaque: false,
                concurso: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'noticia j',
                corpo: 'corpo notícia j', 
                data_postagem: new Date(),
                data_atualizacao: new Date(),
                destaque: true,
                concurso: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                titulo: 'noticia p',
                corpo: 'corpo notícia p', 
                data_postagem: new Date(),
                data_atualizacao: new Date(),
                destaque: false,
                concurso: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
              
        ], {});
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('Noticias', null, {});
    }
};
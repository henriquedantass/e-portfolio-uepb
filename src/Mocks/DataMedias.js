import * as images from '../assets';

const DataMedias = [
  {
    id: 1,
    brand: 'Youtube',
    icone: images.youtube,
    data: [
        {
          brand: 'Youtube',
          title: 'Professora Adriana',
          link: 'https://www.youtube.com/c/ProfessoraAdrianaFigueiredo/',
          description:
            'Canal do YouTube de uma professora de português, contendo vídeos aulas com dicas sobre escrita, em especial para concurso público.',
          image: images.video1,
        },
        {
            title: 'Redação e gramática zica',
            link: 'https://www.youtube.com/c/redacaoegramatica',
            description:
              'Canal do YouTube de uma professora de português, contendo vídeos aulas sobre gramática e redação.',
            image: images.video2,
        },
        {
          title: 'Redatorres',
          description:
            'Canal do YouTube de um professor de redação, contendo vídeos aulas com dicas sobre escrita.',
          image: images.video3,
        },
        {
            title: 'GramáticaEmVideo',
            description:
              'Canal do YouTube de um professor de português, contendo vídeos aulas com dicas sobre gramática e ortografia.',
            image: images.video4,
        },
    ],
  },
  {
    id: 2,
    brand: 'Websites',
    icone: images.website,
    data: [
        {
          title: 'Livos Digitais',
          link: 'https://www.livrosdigitais.org.br/',
          description:
            'O site está disponível em português e pode ser utilizado por alunos e professores. A ferramenta permite que o usuário formate o seu livro, escolha modelos de capas e insira imagens. A obra pode ser convertida em PDF, formato A4 ou ainda ser compartilhada nas redes sociais.',
          image: images.site1,
        },
        {
            title: 'Estante Diagonal',
            link: 'https://www.estantediagonal.com.br/',
            description:
              'Criado em 2013, o Estante Diagonal possui um layout organizado e agradável. O blog é administrado por cinco blogueiras, que se apresentam por meio de apelidos: Joi (fundadora do espaço), Lili, Bel, Rai e Nina. O blog é recheado com resenhas de livros, notícias e análises críticas de filmes e séries, sorteios e entrevistas com autores. Além do site, o Estante Diagonal também possui um canal no YouTube focado especialmente nas resenhas de livros.',
            image: images.site2,
        },
        {
          title: 'Biblia Mundi',
          link: 'https://bibliomundi.com/blog/',
          description:
            'O site traz dicas de como exercitar a escrita para escrever cada vez melhor. Também apresenta entrevistas com escritores e profissionais do meio e ainda fala sobre eventos e trata de temas importantes para o autor como a autopublicação.',
          image: images.site3,
        },
        {
        title: 'Homo Literatus',
        link: 'https://homoliteratus.com/',
        description:
          'Matérias e artigos sobre literatura. Indicações de livros e outras leituras interessantes. Crônicas e críticas. Entrevistas e podcasts também fazem parte do menu desse site. Tudo para alimentar a fome de escrita e de leitura do autor.',
        image: images.site4,
       },
    ],
  },
  {
    id:3,
    brand: 'Instagram',
    icone: images.instagram,
    data: [
      {
        title: '@redacaonline',
        link: 'https://www.instagram.com/redacaonline/',
        description:
          'Perfil no Instagram de um curso online de redação para ENEM, outros vestibulares e concursos, o qual posta dicas de escrita para fazer uma ótima redação',
        image: images.instagram1,
      },
      {
          title: '@poxalulu',
          link: 'https://www.instagram.com/poxalulu/',
          description:
            'Perfil no Instagram de uma EduTuber, estudante de Letras, a qual posta dicas de escrita para redigir uma redação do ENEM, além de indicar livros para melhorar a leitura.',
          image: images.instagram2,
      },
      {
        title: '@professornoslen',
        link: 'https://www.instagram.com/professornoslen/',
        description:
          'Perfil no Instagram de um professor de português, EduTuber, o qual posta dicas de correção gramatical, literatura e redação.',
        image: images.instagram3,
      },
      {
          title: '@boaescrita',
          link: 'https://www.instagram.com/boaescrita/',
          description:
            'Perfil no Instagram de uma pesquisadora da UFRN, que orienta a fazer produções textuais acadêmicas de forma criativa.',
          image: images.instagram4,
      },
      ],
  },
];

export default DataMedias;

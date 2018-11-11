-- SEQUENCE: public.curso_seq

-- DROP SEQUENCE public.curso_seq;

CREATE SEQUENCE public.curso_seq;

ALTER SEQUENCE public.curso_seq
    OWNER TO ueasistemas;

-- SEQUENCE: public.unidade_seq

-- DROP SEQUENCE public.unidade_seq;

CREATE SEQUENCE public.unidade_seq;

ALTER SEQUENCE public.unidade_seq
    OWNER TO ueasistemas;
	
-- Column: public.uea_curso.curso_id

-- ALTER TABLE public.uea_curso DROP COLUMN curso_id;

ALTER TABLE public.uea_curso
    ALTER COLUMN curso_id SET DEFAULT nextval('curso_seq'::regclass);
	
-- Column: public.uea_unidade.unidade_id

-- ALTER TABLE public.uea_unidade DROP COLUMN unidade_id;

ALTER TABLE public.uea_unidade
    ALTER COLUMN unidade_id SET DEFAULT nextval('unidade_seq'::regclass);
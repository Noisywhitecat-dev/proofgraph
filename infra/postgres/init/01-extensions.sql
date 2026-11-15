-- 데이터베이스를 처음 만들 때 한 번 실행된다.
-- pgvector: 임베딩 벡터 저장과 유사도 검색 (3단계)
CREATE EXTENSION IF NOT EXISTS vector;
-- pg_trgm: 문자열 유사도, 기술명 정규화와 퍼지 검색 (1단계)
CREATE EXTENSION IF NOT EXISTS pg_trgm;

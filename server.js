// Servidor Express - Projeto #11: Hotelaria & Check-in Digital
require('dotenv').config();
const express = require('express');

// Importa a ponte configurada e segura do Supabase
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3011;

// Rota principal de diagnóstico de segurança e conexão
app.get('/api/hotel/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 11,
        sistema: "Hotelaria & Check-in Digital",
        categoria: "Turismo & Hospitalidade",
        tabela_conectada: process.env.TABELA_ALVO || "reservas_quartos",
        parametro_ambiente: process.env.TORRE_HOSPEDAGEM || "GRAND_HOTEL_11",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log('====================================================');
    console.log('[PROJETO #11] Hotelaria & Check-in Digital');
    console.log(`🚀 Servidor Express rodando em: http://localhost:${PORT}`);
    console.log(`🔍 Teste o status em: http://localhost:${PORT}/api/hotel/status`);
    console.log('====================================================');
});
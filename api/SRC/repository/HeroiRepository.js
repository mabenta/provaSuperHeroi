
import {con} from './cenection.js'

export async function Heroi (Super){
    const comando =

    `insert into Tb_SUPER_HEROI(NM_HEROI,DS_SUPER_PODER, DS_VOA)
    VALUES(?,?,?)`;
    
    const [resposta] = await con.query(comando,[heroi.nome, heroi.poder, heroi.voa]);
    return resposta[0];

}

export async function listarTodos(){
    const comando = 
    ` select id_SUPER_HEROI  id,
    nm_heroi   nome ?,
    ds_SUPER PODER ? ,
    bt_VOA ?;
    `
    CONST [LINHAS] = await con.query(comando);
    return[LINHAS];
}

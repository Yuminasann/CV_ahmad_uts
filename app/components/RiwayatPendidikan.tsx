import RowRiwayat from "./rowRiwayat";
import { RowKerja } from "./RiwayatPekerjaan";

export default function RiwayatPendidikan(){
    return(
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2x1">Riwayat Pendidikan</h2>
        <RowRiwayat jenjang="SD" sekolah="SDN Pamarisen" tahun="2007-2013"/>
        <RowRiwayat jenjang="SMP" sekolah="SDN Pamarisen" tahun="2013-2016"/>
        <RowRiwayat jenjang="SMA" sekolah="SMKN 1 Sumedang" tahun="2016-2019"/>
        <RowRiwayat jenjang="KULIAH" sekolah="Universitas Ma'soem" tahun="2022-sekarang"/>
      </div>
    );
}


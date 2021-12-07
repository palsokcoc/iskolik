
import moment from "moment-timezone";
import 'moment/locale/tr';
moment.locale("tr");

export default [
    {
        "ilanId": 2784,
        "unvan": "Bilişim GÜvenliği Uzmanı",
        "yayinTarihi": moment().add(5, "days").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().add(5, "days").add(1, "month").format("DD MMMM YYYY"),
        "durum": "Aktif"
    },
    {
        "ilanId": 2784,
        "unvan": "İnsan Kaynakları Uzmanı",
        "yayinTarihi": moment().subtract(6, "days").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(6, "days").add(1, "month").format("DD MMMM YYYY"),
        "durum": "Aktif"
    },
    {
        "ilanId": 2567,
        "unvan": "Teknisyen",
        "yayinTarihi": moment().subtract(2, "months").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(3, "months").format("DD MMMM YYYY"),
        "durum": "İptal Edildi"
    },
    {
        "ilanId": 2354,
        "unvan": "Aşçı",
        "yayinTarihi": moment().subtract(20, "days").subtract(1, "month").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(20, "days").format("DD MMMM YYYY"),
        "durum": "Tamamlandı"
    },
    {
        "ilanId": 2110,
        "unvan": "Hemşire",
        "yayinTarihi": moment().subtract(4, "days").subtract(1, "month").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(4, "days").format("DD MMMM YYYY"),
        "durum": "İptal Edildi"
    },
    {
        "ilanId": 1950,
        "unvan": "Güvenlik Görevlisi",
        "yayinTarihi": moment().subtract(3, "days").subtract(1, "month").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(3, "days").format("DD MMMM YYYY"),
        "durum": "İptal Edildi"
    },
    {
        "ilanId": 1901,
        "unvan": "Yazılım Uzmanı",
        "yayinTarihi": moment().subtract(1, "day").subtract(1, "month").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(1, "day").format("DD MMMM YYYY"),
        "durum": "Tamamlandı"
    },
    {
        "ilanId": 1789,
        "unvan": "Grafiker",
        "yayinTarihi": moment().subtract(3, "days").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(3, "days").add(1, "month").format("DD MMMM YYYY"),
        "durum": "Tamamlandı"
    },
    {
        "ilanId": 1459,
        "unvan": "Muhasebe Uzmanı",
        "yayinTarihi": moment().subtract(2, "days").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(2, "days").add(1, "month").format("DD MMMM YYYY"),
        "durum": "Tamamlandı"
    },
    {
        "ilanId": 1380,
        "unvan": "Garson",
        "yayinTarihi": moment().subtract(2, "days").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(2, "days").add(1, "month").format("DD MMMM YYYY"),
        "durum": "Tamamlandı"
    }
]
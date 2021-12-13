
import moment from "moment-timezone";
import 'moment/locale/tr';
moment.locale("tr");

export default [
    {
        "ilanId": 2881,
        "kurum": "Aselsan",
        "unvan": "Yazılım Uzmanı",
        "basvuruTarihi": moment().add(5, "days").format("DD MMMM YYYY"),
        "durum": "Aktif"
    },
    {
        "ilanId": 2784,
        "kurum": "TAI",
        "unvan": "Yazılım Geliştirme Uzmanı",
        "basvuruTarihi": moment().subtract(6, "days").format("DD MMMM YYYY"),
        "durum": "Aktif"
    },
    {
        "ilanId": 2567,
        "kurum": "Havesan",
        "unvan": "Yazılımcı",
        "basvuruTarihi": moment().subtract(2, "months").format("DD MMMM YYYY"),
        "durum": "İptal Edildi"
    },
    {
        "ilanId": 2354,
        "kurum": "Udemy",
        "unvan": "C++ Yazılımcı Uzmanı",
        "basvuruTarihi": moment().subtract(20, "days").subtract(1, "month").format("DD MMMM YYYY"),
        "durum": "Kapandı"
    },
    {
        "ilanId": 2110,
        "kurum": "Aselsan",
        "unvan": "Kıdemli Java Yazılımcı",
        "basvuruTarihi": moment().subtract(4, "days").subtract(1, "month").format("DD MMMM YYYY"),
        "durum": "İptal Edildi"
    },
    {
        "ilanId": 1950,
        "kurum": "Microsoft",
        "unvan": "Yazılım Geliştirici",
        "basvuruTarihi": moment().subtract(3, "days").subtract(1, "month").format("DD MMMM YYYY"),
        "durum": "İptal Edildi"
    },
    {
        "ilanId": 1901,
        "kurum": "Google",
        "unvan": "Yazılım Uzmanı",
        "basvuruTarihi": moment().subtract(1, "day").subtract(1, "month").format("DD MMMM YYYY"),
        "durum": "Kapandı"
    },
    {
        "ilanId": 1789,
        "kurum": "Facebook",
        "unvan": "Önyüz Yazılım Geliştirme Uzmanı",
        "basvuruTarihi": moment().subtract(3, "days").format("DD MMMM YYYY"),
        "durum": "Kapandı"
    },
    {
        "ilanId": 1459,
        "kurum": "Aselsan",
        "unvan": "Yazılım Takım Lideri",
        "basvuruTarihi": moment().subtract(2, "days").format("DD MMMM YYYY"),
        "durum": "Kapandı"
    },
    {
        "ilanId": 1380,
        "kurum": "TAI",
        "unvan": "Kıdemli Yazılım Geliştirme Uzmanı",
        "basvuruTarihi": moment().subtract(2, "days").format("DD MMMM YYYY"),
        "durum": "Kapandı"
    }
]
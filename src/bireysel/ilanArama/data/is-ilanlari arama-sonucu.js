
import moment from "moment-timezone";
import 'moment/locale/tr';
moment.locale("tr");

export default [
    {
        "ilanId": 2881,
        "kurum": "Aselsan",
        "unvan": "Yazılım Uzmanı",
        "yayinTarihi": moment().add(5, "days").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().add(5, "days").add(1, "month").format("DD MMMM YYYY"),
        "durum": "Onay Bekliyor",
        "price": "799,00"
    },
    {
        "ilanId": 2784,
        "kurum": "TAI",
        "unvan": "Yazılım Geliştirme Uzmanı",
        "yayinTarihi": moment().subtract(6, "days").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(6, "days").add(1, "month").format("DD MMMM YYYY"),
        "durum": "Aktif",
        "price": "799,00"
    },
    {
        "ilanId": 2567,
        "kurum": "Havesan",
        "unvan": "Yazılımcı",
        "yayinTarihi": moment().subtract(2, "months").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(3, "months").format("DD MMMM YYYY"),
        "durum": "İptal Edildi",
        "price": "799,00"
    },
    {
        "ilanId": 2354,
        "kurum": "Udemy",
        "unvan": "C++ Yazılımcı Uzmanı",
        "yayinTarihi": moment().subtract(20, "days").subtract(1, "month").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(20, "days").format("DD MMMM YYYY"),
        "durum": "Tamamlandı",
        "price": "533,42"
    },
    {
        "ilanId": 2110,
        "kurum": "Aselsan",
        "unvan": "Kıdemli Java Yazılımcı",
        "yayinTarihi": moment().subtract(4, "days").subtract(1, "month").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(4, "days").format("DD MMMM YYYY"),
        "durum": "İptal Edildi",
        "price": "233,42"
    },
    {
        "ilanId": 1950,
        "kurum": "Microsoft",
        "unvan": "Yazılım Geliştirici",
        "yayinTarihi": moment().subtract(3, "days").subtract(1, "month").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(3, "days").format("DD MMMM YYYY"),
        "durum": "İptal Edildi",
        "price": "533,42"
    },
    {
        "ilanId": 1901,
        "kurum": "Google",
        "unvan": "Yazılım Uzmanı",
        "yayinTarihi": moment().subtract(1, "day").subtract(1, "month").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(1, "day").format("DD MMMM YYYY"),
        "durum": "Tamamlandı",
        "price": "533,42"
    },
    {
        "ilanId": 1789,
        "kurum": "Facebook",
        "unvan": "Önyüz Yazılım Geliştirme Uzmanı",
        "yayinTarihi": moment().subtract(3, "days").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(3, "days").add(1, "month").format("DD MMMM YYYY"),
        "durum": "Tamamlandı",
        "price": "233,42"
    },
    {
        "ilanId": 1459,
        "kurum": "Aselsan",
        "unvan": "Yazılım Takım Lideri",
        "yayinTarihi": moment().subtract(2, "days").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(2, "days").add(1, "month").format("DD MMMM YYYY"),
        "durum": "Tamamlandı",
        "price": "799,00"
    },
    {
        "ilanId": 1380,
        "kurum": "TAI",
        "unvan": "Kıdemli Yazılım Geliştirme Uzmanı",
        "yayinTarihi": moment().subtract(2, "days").format("DD MMMM YYYY"),
        "sonBasvuruTarihi": moment().subtract(2, "days").add(1, "month").format("DD MMMM YYYY"),
        "durum": "Tamamlandı",
        "price": "799,00"
    }
]
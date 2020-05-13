import React from 'react'
import { View, Dimensions } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { SvgXml } from "react-native-svg";

const logoIcon = `
<svg width="111" height="40" viewBox="0 0 111 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="110.476" height="40" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.00574713 0.015873)"/>
</pattern>
<image id="image0" width="174" height="63" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAA/CAYAAAB5NvMIAAAcvHpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZpnjiw9c6X/cxWzBJJBu5ygA2YHWv48J7tf8xlpJEC30eZWZWWSYY4hGe5//N8X/g//WostlNpHm/zJvzLLzM4fI/78m9/PFMv38/vn9/e99I+vB3u/b2ReMn7bz3+7/17vvF7/+sAfz0jrH18P4/edPH5v9PvGHzc0PTnzx/n7IHk9/7yeyu+N5u9Q2xz970Nd+ef3/r3wG8rvt/Xv1n/eRP8Pf3+hdKJ0KldZzteSxe/n+BmB/Xw73/XnJ9clK/ydrYefl35HQkD+YXp//I7x7wH6hyD/8Vf45+jX/e+Dn/33CvunWLbfGPHHv30j1X8f/C/Ef3uw/Tmi/I9vzJ7Gv0zn9/u9M967P7Pz0oho+62oGP6Ijj7DhYuQ2/cxqjV2vit/9+9r8jWix01yTtxx8bXTTJmsvJBKOsnTS/f7vdNmiCXf3Pmd8872vTas55m3/eSJr/Ryt2nHBjnb+QYzXs5/jiV9z53f8zaTPPEkLs2JmyU+8p9+hf/qzf/JV3hP+U5JwST16SfBWZXLMJQ5/eQqEpLeb97qF+A/vn7TH/9WWJQqGaxfmAcT9Lh+brFq+qu27MuzcV3l909XpNDP7w0IEc+uDCYZGYgtWU0txZ5zT4k4DhLkjDxbyYsMpFrzYZC5mLUceh5Zz+YzVJCuzTW3rJfBJhJRrVknN9OcZJVSqZ9eBjXk1Wqptbba6wh1Vm/WSquttd4Ect6tl157672PPrsPG2XU0UYfY8zhM08DA+tss88x53TPwXmQcy/neueVlZetsupqq6+x5vJN+eyy626777Hn9pOPHWDitNPPOPP4TeGCFLfcetvtd9x5/VFrz1559bXX33jz+Z9Z+83qv3z9D7KWfrOWv0zpuv5n1ng19P7HLZLgpCpnZCyXRMa7MkBBZ+UsjlRKVuaUszgzTVEzg6zKTThJGSOF5aZcX/ozd39l7r+Vt1DHfytv+f+XuaDU/W9kLpC6f83bv8naEc/tL2M/XaiYRrEi79/hIa8TF1j0Rsu2lvGJ11dqd5wyScLq5zRgpzdbl1x1qw5wWfbD48esiSHbSoHwjTd6ckZisc/TK9dMrhytxL3WHJcbpxlLbXbXuamdsrbdnfzyiBONPM+QHSgETMd+3vphgLNvuGrtTjYBRvOxDGzNpIsBtZfLXMlbroMpdpJJdeUS3oru6eY2PJ1qO/FRK1Q3s2c8/XiqxdKbdeRb+ump3lnLBphvpVTW6zPns0Nqe7x4PQ9fJO6Mspz8gTZjxz1W3vusWhbPZcCP28AfZy3BovPJ9kY6a5dg7R6fZ28H1d9g1jCz23iWpjD/2CIv1MpWbbzSx4IQoBL4vtRHINp+PCnk+9rYqRk3LlxNTuKiCVY92XfKxw+1zbzHQem828rrzgjvSL4nHU55cM8R8mEQSBJdlBVwm/ysfT045USviVDPZWSjineoSyIwTrb61l6pdkKZ1g3lB4VLbJtcLhvOLFfXbI2y9dkrwaeQr+I9emv7ltapiUuj+Kw37ktkwt0tvx4V7EvOkS2Z7K16CdlQWA8ZmGlfkQf1ml0jvoy/lju34vF9NMRZzyHGrQxKAGxQNnspM7aa5iwjbnqqO9/1OmmzG2mCF1+dRAeuaJQFMTruonnagJzkSeFDGbThflMjnerfWDt3if5iWc0LMQYgeExd4JoV/kov3EVmn9F46d0+fdcXF0LXr9V7SiZvcc+H6rjAzKQGX76UVKKbKdPTqbTR0gnplZEoKZfOJF4Gb7VOQqjawsMvwBA7d0UugCV59vtyW/QLGeyHsqUfSltBfcGAgaA5Cp+NW0qa8qSk0gXVSLNdHky1UjaLlno7rTxmQ7HwVj+bXAyCffjo4TZxMwFjumigl0C5OYRqBT6l07mrJ8KBwJ+7tZ8/pWN/f4d/fuGfflPoRoXVA84l5nZT3JV6jWAqIQfuKIGWYw/Eqa2jXi93pdHLAbDSUuBSonw39I/MtLOfxFdb+4KDnbCvC6auarPR+NLZxHjOawiwNfqtP4XZVHRIhEKd0TUxn4PoQb01HMvi9qUT+vXSppsYKr1GB9ZTISDiQHHO28hROcxn9Yu+yGWckaiISqaE02PDV6Bb7OuW+fao4MINPjUthFXdHdFqkq1jEe1zEgoSnuh1QSjcw4CzCw0TO8p/Uthfx5HLehCj89CQk8I/a4xrY3U6vOUDkEIzwEczu49eplDFmadAV2QwdahiU0GnUcwrXBpnvwK1UVrIgZ7wNhcem+N7tKPEaFgH6A49yCMrkSBdGyHVMhyL42qvhriUD1CxgVWIhdVTW60zPtp8DEANtZBOJ9C02ObVDj7t8xAHYqY9KNzzcqDP26Ey+Z6GEZIMbtD/M2CKACi481UxD0F0L8krHPjeMgcTKasDc40TcqZ5N6AWKSKMyzBmLCLmXwGB28l1A1wDCWJpbMAgIX7BK6iH5KbH2x3BDrIAPdQbgkbo2/ciRkx3EX7Aw2hDx0rQWhsVsD7uGL0DfMB6Q5P4IF2IiNOkeYzg0HAYRrRMAWohhAddOui6C5gOo14pig7stKQovgX0JWrjxpkm3Y/xiDADcsToV0CClDk0jH7pNS6b5O9STNJDfi8uEoTZneZfI76Uidi9K2wDYXKaoAN8CLzgeukqREZ/XTBPOxEj6jKiYvCaAC7Fw0iAg6pijvMBhJiar7ITHovSB2H4H1KdMmvEmefXpTlUTG4DwJJaIHWarWKOLqpnAKxAVrh1bjwwTXoIMUov03eVWR/qONVXEAvVKfJGNLk79HZaBNYyZOvSq+AYaiDIcO0ChByIOa+cnWEhCvZGT7YFBDM6SZPW0EGlkeRp+3F3RpulvRCYCNpwozhqVZ4xeQtr0SZ6jcePgztBzRHKcU9TgV/CASKB6MjdGYExJA8JGSMGZRMcfxt32DMKp7zrEekAMHunSmYfnjd0JaSLhU8iKeeBjJCmhZdVj2uHyosNOEOPgSKEr9Olj34imuAzBO8k0sTOdOF9aF16e4r7JgwB5p0BN7+QI4hEUguUCOlQsrLTDQ/l/B+Yo5AyuJaljBAUnUpyjN/FqwLVVXRxr3mAX6v4lVY2pndzvQs+XBRNL9Q1U+9NQh0sQOfsiupgNBK1RAQpfihMIsvU2qQzUcKrzlvWGi/T68mLVMt5nb5AKDuaTwx3eDBZQWZMXwAEauT5qKniRcBkg2/qq/TbinICaO5Gde0+5CfsOUyHsiOmZtQBT4acnTY5iUfDvUWqNgKRfRENp010GzAUjIS6k0AoSbVAQbnduQCBSrcDbA0RtsszR75MqCHggC4zHndA2hdZivmArqTLBv410sEZLp+ECT/uYNujoGiHO8BnUjgzAmA6U4OWDonGJHPZ6K+AeUJkitRh1kYjk3NEQaGkxUMoC4RYEVaBLWcVkBhPK1FcMNEFrKQ3ywSWMoVG/57zoOHmD1V+AFCjewvVytj3FaUnMWX8/goYwO+Pv35TFqiqQdgpxZ3BsIuMpG8OLflxVpLiGIkmRy7ZS3QgwUbj0EmbT0CdTaBskjOYGJQvuvSkjvjDOeB2eJmqwLDQ+VlKGwgFlvCWgD8NaNwZqdM+K7HQbU+N6rXBxty6bydBqgBgE8G4hUtIHdAcldzAelohrAibtkWTPIdgEQ0AN1GnY8XffVcaTDdrUk4DZgS3fEOWCD5Cuok/WGcBHcIl4xXQzhCOGBExPZXQqCKkHHDiRdlHRQhmD3WT1FOxS2pgVfBy+LVzCAFWp2z8XkYiZWFXYwL4a6Qx5sbBmDiAviThAY1Gsrvl4unn8trHGwEyTQzJQeJWATlIs9AcCWPe7TpsfZfYAI7CikOLsCkyw/UhGKChA0syNKQpaMjIzqOxehckQ9R0mfUEjDys4wEDeV6LVBYi/EobIcP2wAYmGniKm8IBuCVqqJvlCwmGMigoc1lG4nxRRO1bB3yYVQQOwo1oUFwjAXyABC3luXfUCAKX9siwMQGKUAEIJZcBktECRIP4UhKEtuwLLSBFG2h6oAQoftDcSBQPvAG8M2/QoD3JxT4wWxAyUMzMUP6KKB+Arwe2+iKy6AvGS39oYQMwQWoGOvlMooAQe9gpOpUiOxQDwpbZbXT2GqQBLwgI8wj6208FoRCBgLRV3AYVEZirIU/daYCRKQ8tN56L1ACathYksDooRyAOLJbGv8JhdNsSDGKRAVf4OFTCBohjnK3DqrWIh0VLkhTzgiB7valuNOSgFmRl/HA1hnlGxF++H2PHruMPJHYQDfiqh6efo1MtEOhDET3QleniUtCh8FEELfEBuMcCfWD8pZNIZCgQHoKPVNCOkTBMk96VWFkg4L2ifIANxxaJNbYFXyjdHW2RNCWpXKRsOFrFQPGjq6qRZ63D2JE/pyTS8xQXgvYJP7XicmVQGSIUGLHvkSAMlRksQsW9ArlwX3StJJBcZyMZ1ZeUqsvWirIigh+vhvYyX5LgOR7kZN/EoYexL8KXCWSt7tDGqVGqpcga0nBUWSLu6x7GhVJyO1x2qaHeR6TwLlpGqy1Bz+XhMKkdHDp+L+E5AHg+j42A4yLlCMtMhrawx6CMKmzc+17OuPBGZg1Vi2sAN+hzaTUwAGvENwPCVYFfGyEMMRV1PFiMBergWkF3YDAUWAjAqKBghRlvgc0ydPiygz6crVCKEjG0jHeIWlp5EmsiiURBfE0sNWQKIiI+qaSgRsH4Vq2QkRL0k+G5cWC14tO38IzrgBpsXPk2dL5/V9sLWAKBMKj0nMqesh+nSQRgKwx/PLxnnCFViZqLqk76i5Jqkmy0aaGWGOOjiOgsRAU9EBp1QS2j95Gv90I+TWq/y1EAv4Tgolvjj9BA2GVaK4Kz9834eEJRic4F979JJER1Ek+AdysSJo8GkTnLVRpwAhCb9ng5iZwIGjcrMi0CY4C+JbKGj2tzTD4GIFKw2DYJdcBSxhqPSO1I0UqMUpigzYHUYDdUCzNcMjcLeYxHg5bHV2XjU9JITEwWxhHglzOnzx8YDibg6xCVWWtxRJ+G6MSOEkeRhIwW0QJLBRosomdI6yYZD1gU1VyUHGoHqYE3AXk2cES1iswbInsXOXK6IyzGj7wgjGWRfv6IB4LCqX2Ll4ijN91K1hrxlYyKWuFAwWSs7+l6FCp4l9Az09iER84codzQf1MrcCvZLP0rAbjbeBwzQX2gVismpxv3ha9xODOtaAE3Wy4EgW5M2HKtrH3LW3n+q955tAccSJhnw89vNBbmDkQnQwE7KE+BpWpaGCMej7peFdPkD+j6FjtMa0lJNHsBCRSQd8CZySE1U03i2wAaxwjrYv0eKYF1mr1WIUo4RdYYWTW1io7jQOcRDRzcHp/GAYnvAIvQdU6vUSWG9wIBy+efmSLPw9yptNAuQn01FyHUykzCNuFT+YX2hp+KsOy61tjwUbMUsIEWRdHjurP/rgYA35LgGECajigA+oi/6C2VL7faFOOeKVs4n9nGkGQcOrLoaANKHKw2fnJ+kPVMERdPv3VID2QC81HlrYD80ozzACMz/SyyDJjwQbqyav17DdbeiOuWeVKBKEdDfPdNpwLlqC4EgcNsmdKn6MMrB6WJpqD4mGtFlAyQGnGltTy6pqOKUBUE1TvWfhhlxD9wmk4jAIZd6OcGIqtlrwx3UIzFGoOmZw/K59Ae3bWIgMujALAYZE3eht5rqCPSiY2jnG9HQ777KfxF/6Mj4tAVWnXoA5WQtM9jtqR5DXKrfUwkB1NomJCkIGII2uspaMNgUYrohCdRV3r8jDCKd2obU5qACzPNiGOk8JFbk+FlhIYUAbxC4ZYcBsiFT81kyz/Cb/BwwUUNrWNS/Dyajx4oG7Qp6P3b9wDQ55GFRVyBqEB8KKCY1gIq2AEiUEG8QILyBE0d9tZmR/l2AJhz/fLp39oadUMjpSijZTvQGzwf1Baewa0MSJuMktP4PizS0T4So8bvRbzlhhZR6bpOmCl9DuBuzLF8IDoThZ60gHAQKdSLdpfpMhigScAlaRmsOCz7mUiMlk+Qpdm36jzaDPJlvPFoF/AYQUppgEWkMlUtPHUjA9hB4TbOUlXeVdtNZgbEmN8SN5jNzamYODbGW6hzN4bzXE1di1U0vMqxvE/A9VqO1h/IDE/a2pjPGjZ0FqALfJcUtGpcTgXUojIQFBOELCZxiRBcKEvhmdSoIb8pFsQrcCq/S7UH04YHDk32EtcKWaznVHv+8nN4Gbxg4shceg+TgoQBXbMWa7vBNHwCW4ap0fIX3UK7+50dx481qivFA+3yBgSf6dNMWdPpbQ2CTEntmvmY0sxTCFQPHcbkCUhk9Q/wwgzcaX00BLkq2grxDBdBOrBZkbAREsDFpJUYyiQBS1JsUIUxMG1UbYjkp/i0jQM5qbyA4GhdEj9K3y2cCkiztF9JPQEVdO0MQFYZmq1Tcp3XoRJ5F/hGSwhVG3bkhzqv4iGGSE9DEUnew7V2Cv1n30EMsmhqLcu49n8AdOqC1+AaBBByQap2geEj6f9c6vIdQJhWh+k1HKafwMuTlzI2nLEjPqiWp7VJ6EB7EMyftNJeg5sj4bloAw5jPPyLdkqvaXUlhT0m8l49o9UregWSsKjFaNplJ542tA4KbKFhI+ALaktrVXyTL8QY0A4St2DobSpYDwHWmhz/udo+QrA8bfDl7Ll4WnRgdm12AHOJWiBX9M/Emr/UAH880vs83qZZCWMiINnFE7d96w6IrlsFZfKZGKNDXZtmCF7SnX0uUfwMuncRdIGN1Lp/Tr/GeUxLXSV9HlzDwVr0q12KqmVCeRUhsDQbPrd4QL9oTxKL0rVCcwB7Gr2XJ65/lh/ptbFuFbVUrdqizw9eQMKPBCCbkdLphVS/nD/fPB+o7Mo2dvTqkE0CKC8dsBAwDZlmh8snNHMxUx1/lSiCh4XoFRGxB/pEarNILBo0gdOLcA8AQyHApyTRC7ijLcG70SsMRmujLl9R63SqAOV/tUaNUKTqAPVv4dVkAZge1dpoP+ABuWQg0ulakkE54PKl07ix85SFF6k08ebhuWuPr8N6FBUKoJKs1rxoKWbR60V7Zbkymoc//fqx1q61hY4sTyMgeSGFniiHIyI/OEIwUKF5qC9SCFk1nvZ0pOhnR5kxfkcn6MkKSUZCioUAgr/t5GzavdWSHDK3b0gIB0XIs2R4kl4Q0HW077fLQ889/CGe+XW5kHC+PUZABVckmXGhekwKXuepY+iAWnOUT6BPevINNsEPigPQg6LHq26UQoDzHPdEgqXLoD0cu2unHGNR8G4khBjgj7E8+HpKT2v951vrj3gsFAgwZSVoMwYD++ZEGgnrSdZsi1KYiJKCpNaGS1nYGmhdi8DUIPbz26eGTcAaUHkfEWSOmJS0BxqLVJA47BGNbloJA72mNlugGvDDz8XMijZBysyjSDiUJ+ETuMFLYCT5Retis43oIjp1Og6UWuvgjFFUNDA+bPa+wCoMmEXt5xTtwUcdhICOJMielHrC0WHJ0N9L++SWa5Mzn2A0YklrEqQzb7KEZdL+BghVGEzSjj8IifBheOA3qASaRwaIakAh05QFqLnIxYZV2+1kJMzUGi/kIR6IxAA+dqR30BLRfdo0s+PasDgFafQwtmAn8WkCWkaviiRhqKUkbMKpa9efNAiwG0ILPYSq32S7RR2zuGBJc/JSIVgc+XJEOiVFGNGf2iN3J95XeyIFbJddl/XR+aONhZ+LD6koUO+IF8LZtKk0oZphcekUpHaCY6Y/5XhMX4vA/+GAQqwNfP72NzYGmLJhdlqtHBJqWr/TNhFKBJhNGE0fWjjufSwaglZ0LUppO0P+YLqW12gZfORl4MAluCRkOdn9oHWKXNmpKaYMssv332/dhfKIieqFIIE1VPRwFQ8tIJcHu6plcR5JujlpI6HrnI5HUFaHW1DE6Olb4H6teBOMEgrXH2mt76ARmcMhytHFpoUlNfvVFgBVgenY8FqDe5pnbbivhyBAUV1saIB2q1bSrnaTn4FkFN2B73VCYKR2UWN4A1I8QIyILmw4u29X6CoSLTfpi4I+QhVC6ZjHvhyDhPBuOsACYtHMRycJ8TZ4PPh14JUPWop4dLXb0/7qd44tBioI1anNi4W000J8Tvtbh1paSocUcIpZ4n5DxKNf0uyYeKq1agsehGPC7wVt6a9PE8XSkiwm6Z8PfRznBIrAHy0IgKoTX6ujGSAYBQT+Rgpk1pqyLHroOvqKYlEMF4ILKabTfOhIDNHRashyQZhF6gyy1M5S0fILjx6CWnoae/GCihAzOmSsQVzXeihUUreOYiz79ktoKmoWtLKDUjhyRYAek5baU/Xt88IQDwIVpBl3OSVLr5U5a5MHVY/o+JBr1ZLkRN6NqUlnLp2xkLHEoCKlA6z0OrYRoUBxpIFgh6y15X2hUmwtyJkPjhbZw0CQZF607QEQwgFxc1PKoODXkI2giM8xvemsU1lUbNHZJuR9K3va0Dq6tlv4IOGCBigPmAc/Rv3Xqa20HbSEaoW4Ef0qd1Qk9JZ2r7VXD9zq1BeukQhr/cgfTg1QWlWHy9bVDjcmboTPECl2TcrmaMH3aWsU56B1arqXdqUWzt40ksv2YmXlJH0dKFUWRhkMEgkHpPIa8Qk8bhGKqfU4IEsmFGe6smQHSoK+71rMRhDu8p3PHRkbpRNMwXTCCIqkmXaOJ8IEs+kMn46DZFiUltGi2EM70eCHlCE4os5aYR7QDIAh8Qezh2wGJoNWw6fRimCBYZG0dSD7pR2FqcVQWl0rODQCpjY1HYo87ZNUci3hRxrga5+gB6HatRFVodPDWAoKliji8MENEAwvJKv96Hu4V/B9s6xj7yHrSEiRdV72cwbnjh+c/a8P3fz1G/DdOoCCIdD2lZyEAqyNOmosQtgL4qBYdMQEIaJTXjqglsFgHQoDpUyny8rWKc4atNqiA0qM4lAwpmg/7TZVrAniLmPIySy2lywZ4pBQaR8HnTjrt4GCnkQ1BNmoiBBp8p3oNU9Ha3RwCUAmknO+qhY4RBGtlHK5hxo3PS3mRG3p0d4hru/gI8KQTiYXOBmgl8r/8A8JiF0E5XR85YMOZNbT9uwFz6tsSFTkkcdEgSZAI96Xa9cxoZa1G4qNwi5s5LnWim2iz5B2S1QJU22dqPs59nAdd/Z0QDd/x5goXu1THjBD531webmSQgwiyAU96RwT4AfxG46OSuERhHtJ4INzK7j+76DLj+BFYHetMUedznOgICGuIHXbR8efB57cBOxMC1AqgAUT2WYLm0X9IgZcJuRunYLSOUHhFdjdZAgPCFI86gynyB/Ip//4BnQez3HU1alhFG/fCtrMCYJKSwumsppgqPwvYj05/rQVLXmBGGlICC8U29MBSXPwq+qI3sVTvaM9ORQBZoEaKMzCJfPQTBvEedMBKjs6Uw/eQ7fALMLKVAB0icM8AVrWUuNIRmbk3R3p8B0UwgcQTGKL2YjrNsC36qQPml8Hx3TyAqO6oWIGu0KjUX+Wl2gSnRnCmlGomruWlnSu9W9XYICEACQYKESF0F+QP1RlAeAA1qEsHQXFDlHHeN29WuUHMHgmFVoBQiDcfIDAWvKEKnjAvVdT1jrVCzjP70ggkMHT673UMW4EE47J0aKrkZkH5FUdvHjayqqAaVmvgRJe4qYN0J0BrZt0CkxL2fUTFFgIbe4Xo8DxjTgGpkdF4eqaDv9Vw/7qpGSfWrXPFDe/6TVKDK87tePiGx7EEeA24duC5dg/hx4NP9NN21SfsacdKwxAj2GqEUuunRptPRM8inKaxPW2qrM5UCy9/eAJGOL/AUPQ3VWzGO5dAAABhWlDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw0AYht+2lopUROyg4pChOlkQFREnrUIRKoRaoVUHk0v/oElDkuLiKLgWHPxZrDq4OOvq4CoIgj8gTo5Oii5S4ndJoUWMdxz38N73vtx9B/jrZaaaHWOAqllGKhEXMtlVIfSKIM1eDGBGYqY+J4pJeI6ve/j4fhfjWd51f45uJWcywCcQzzLdsIg3iKc2LZ3zPnGEFSWF+Jx41KALEj9yXXb5jXPBYT/PjBjp1DxxhFgotLHcxqxoqMSTxFFF1Sjfn3FZ4bzFWS1XWfOe/IXhnLayzHVaQ0hgEUsQIUBGFSWUYSFGu0aKiRSdxz38g45fJJdMrhIYORZQgQrJ8YP/we/emvmJcTcpHAeCL7b9MQyEdoFGzba/j227cQIEnoErreWv1IHpT9JrLS16BPRsAxfXLU3eAy53gP4nXTIkRwrQ8ufzwPsZfVMW6LsFutbcvjXPcfoApKlXyRvg4BAYKVD2use7O9v79m9Ns38/fJFyqwIpBDYAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBQURGweUiRsIAAAgAElEQVR42u19eXxU1fn+8547M5nsYclOIGGJIlgRUJFqFcWldWmtQKWahCjulaVfl2zgIEkIokilWhEVkmB/NdZSq1ZFbVHrglZFBEUIkADJzCQEQsgymbn3vL8/ZjKZNZmw1bQ5f/Ahd+4959xznvMuz/uecwkD5ZSWqplVStvoH49RSXfk9tJE68CInJxCP+TOlec3zCDB8wHEQPDzxp2JT816mbT+MrjrFpnPUyT9EcBogFSN8Kvc4sS/DMDuvxS4JhOLkar1VTCu9eos0Yqs4sQH+8PArl9kzhYangVRmMflFqPaNnzW8lFHB6D3HwJuZUFNsqopQzU76uY+kXb4ZHVow327Yzgm5jUG/yTAzx2avmNwrinD9oPWFEWW6cR4A4ABACT4SwE6C4ARki/NXpb8/gD0TqyIvj7wQqF1akWBZROTsV7R6bcZIvRNFYXWL8rzD2aeaGeYmbSY6Gf8Qes2D8KNDkP8D9o8yK87UzDe6gItgFqdwF0AjE6tgagB2J1m4FYUWh/UAR+CcIUP5CaS0H1cmXdg9Il0pqLQsoyA2T4qYSsRPu762y65/VQNxvOF9ZNP5PnKgppkRShvMqC4RwY8SwUyuv+m2gHYnUbgVhRaFgC8HGCvZxhwuP47hIV+w/E7YtYLieghn8utqsY3SEa0629bzrJhTSd7EJ4rrB9RUWjZrYf4vKLQUnXcGoPC1wFI71509HROSfJngulK1yVLdmnS9gHYnSbgli+qOxfAo77XJbBICkwCSLpm6oJ1ReZL+2x+5JvjSeBlPwOc+LHIBNVK4Aku6fvOqRiEMFKWOT1/AMANxyVti6x3AnyVxyWbo0MtAwBiTHc5l/8agNxpAi6DiaTyFwB6b3uUFs8pSSrOXZr0DUG6Vbmi4ad97YRBKEUAp/o0XN3Ypj7a3qD/RbdEw2sn3ZFaZL2QmWd7tLGlzyZGnmUkMz/qLX3lgltXph4oL7JMZ2AEAGgaVg1A7jQBd0NBw2JP9ecqe7JLEordkpfxSXeNYmqfnJlCyxQJebc/3yEf+e0TaR2Kjua42+m0/+Ok0yoSd3gBTmqf9rUOnZ4eAxDjcalOr+NXXAvwVte1fXOWJX40ALmTU3Q9SpIH685gYpP/ZMtcImL3ZCv4t8tYAMgP5L10gJ5isN7n8vbskpRKlyS70mUvfjpnxfA9J/PlK1ZYItHMN3lLet3GkG3jhQcGGyINqyH5Bh8b56+/NqUeqiyom8guZ5OJ1wzA7TQBV69XVgS4vCprWcqH3lKK9nvYEBEhA6egfiGDJ/rbzuJeANAr9ADAXavl2VDqNJlYl+FoSiRWBzE4XkgOAwAVZIMkGxEfa6fw+nvK4o5wM4rIRVO5GmnJKU34eM6yINrhgYYkEmqmIpRxLPiXDEwN8L5Ndp19sVP76OaDGSAckipeGoDbaQBuRaF5JoDrfC63aBr/rhflG5LDt+Hh3TFSFfMCPP/9nJKED9blmdMJfAs7mYua7OLkdcGAOkK1XKSDuATM49jRMBHgVBCMBAIrzhiL4v6HEE2drZWFlgYGhvqumQ2LGqoqiiyqy4wwgsjIzLEA4olkKkOEs2sxBY7e0GtzTWmHnyuwjGfmbJf9tDa3LKFmAG6nAbhEooSZ4eOQPZZbluQ3AYIQhW7DIaSoFmsxNwPsZ1YIKZcBgE5HS5mdZD1JFAf05Bc1zGLV+hSYhrK7A9x728xRQKBAAMcxY4aHo+asjwLUzNzpE851aQttHQCECbzADIDQTpJWD0DtNAC3sqghl1mO8XbyUWM7dKAssIfHY9g1uwSy9OqQ5ZnTmflBfwYDe9qa6v5YUVQ/lhm3dLVLDvzJTyMUNRSzlIWuRu2Q+IohP2XQl0TY6QBbI/Tc1n5USiVMF6MoPFQjilI0MRgkk0G4DaBzfardCUD1GBcVRA6SaGfBR1jCQoQdUsgPBZTrIXmxb//nlKR8UJ5vzmHGeU5848ns0njzANROA3CZZZGfBGb+/Z3PTnYEvF/SWA+9uaNXKkOh2wMwFQBj9Z3PTnZUFFoq3O2Clmc/ltgWoNEHXNLzfZaisBeP/TCAGg/zQox0NPyfr3Qmtl2WVZreK8hMpn/qRjrG/jnASKx8rrB+BBE9AnYuuuH6xEUDMDsNwC3PN88AMNJX2uoNsjy4WYGz2E2NyereJp0cborIqyiq+sr6AnM2gMmuhr/ILk18JgiP9RuwLjG7JL7Ek+EIpYy0m68AiQxvzNGHoYAWAEapZ93Ogcwc7txooPBSMA939b9wmonUAZidBuAKhbJ8TFsQ8MSvTamHgtqMwHgPFH/VU4MZjjPvApAUwO6scghFp5Aog1NcOZj4nmD1ZBenrAWA7JLjeGshbvQzhQmvh/JoVRUrtq+t/qmVhPclGScR8xznmMiNOaUpfzxZE7Vuwb44JSrybpJyAgQdUVVZlluWHLLDV2XabrDZh2Y6NBHXlnr083nzxnT2Z+AKb2nbmMnSj0ngTocaNPn5ubyG0QASu3Erd/XIORA9EPAHKct0Ci0GONklf5/MKUn+7JS8NZNfyqRGMqS2Or9uuCmgmQNsI+BpJ2jpqNTotyeru+WFdRcpkRHbwbKUCbOY+U5FwdsmE+tCoh0LLdfZ1KGfgfCNXic/jGuI3rX+gf2j/mskriDtHiZvloeBv97+6LCDwSrQC57i8actuzjlu2D3VhbV/YIZwwNI7K1CrzubJee6LtVqhtbioBOZf3CIIMMiJo4A08d7DTs2mEzTQlLJzxfVnQHmM3yvH0to/SQkzDPfE4QHmw5GGgAohKU5Zck16xbsi1PCjVMZWnXOsmG7jmeCKgrrswDxHMAGHxGQOcpmng7grZ6fty4GeImXhmEMFwbDljV31A2/89nU9v4IXO9ML+G94wAANFaKe9a6dI3Hnx/2POnKTQFtW9AmlrzSNaisSe3qXFNGc6B7Xyy0/JyE7iCTnA/w7SC5bqRj7O7yAvO0UF7YyMrMABJ4Syiqs7zIMh2EqUHspbGu8Xi1RbW9UFlkWaVEhpsh6A0Suu8rChue6OvkVOY1jAaU5ejO7fVWUkIM6xm0DUUAL/HuJnXtvhgSmWC4rN+bCpUPHTwHDB/1QbtuLY3/MqjdZToSx1K7wQMAbwe7d01BTTKA6wP8pEnwvQCGuFZCWe6y1J3B6tEIj8MV7fKYhHQiev3FPMvI3l5YY/8kICb+NsTxyunl91ZV49VRSti/mTEfXlE5uaA8r+HcPlk0Cr/ebTq5r77V7Z9ib1DQFll/CZaP+Jlqgq8iJ+UHjdX0fg9c1ukuCeBw9JxGaLef50HCtx0zNAaNx0dQ2M0AwgMKXCDS5QRuNH6/eVHwhWJO91hctVLfnq5pnAHQPgARUqFXeuruGlNdBIimBLCve80Iq5rJimC6opfbXhKEl7pYGQYavbWTNjtkaVvUeCfgbdIw8xvgbrrR2OkIaN7808Q6MD8OH7OPgFKjcugrdvGAJHT2/u+cEc3wF4Xqqz09rLB0v7gEr7vXNL41uD8UUNp6UW6dkAtnvTwr6C5e4ZDDuieBvsw1ZTTnliXXsMb5LitjQmWhNWh2mkEV5/smwgOAosk3ehuotjMsFzM4sYdbdroSaoa4QLYa0psVkaCYkBiEPHM6sxaIL3kKQvzK9f5bZz2R1hHo+YNa413+DiSpqsZrO9ShV8KVokqq47t+DdynTA1RkHyRz2+HIztkj4nP2cuS3yfQDAbfN0KftDDYfa8+uDOamKb2QDW0SI2nzS1J6XFbi0Gv7e0GOl9TWWR9e11Bw4ScsqSXuswGKbUpQZvRRKCtOZZbenA+3V4sizt6ueVMAlwJN/xwTmnyPAhM81mch0LymBWl0G06uYcInzOLFjB3Ld6gKZ6saXMCXHwjtyy5hiRf3WUG+iZL9TtWIdIuL/BVKwC/F2xFe5asksRXerunWRd7EXnsw/JT1BL3hcJJ3mRKM1cWWptck2pg5isV4ssrixrHMctGALEkxBlBX5ZwofRtnHuP9LlAd2ko9xGzKas0+RGXap7uA55eKbc1D9UNZ8hb/XHHJkH4TfegOdYENqf2GeGgSf6OMW10OXRPkORWKeUz/Z4OI+CsABO1+WQ0UFHYMA+QC4IzDfjtnNLEil49+kWWX2+QDaW+kgiAImFPIwgJEKSUkQFs26ERDuVRSbjMN/BAzD2qy3UL9sWJyIgX/J2kgJrjqaySpCUAUFloncrgTG/TS1fbG2tBjCf82B6ghhSygXGTa77WZQeh13SOyNUMiQBO2Q4AmFOcuAdAnpc9XWC9AgK/Yaa92SUJC/sNcIWgcb6ZYELyNyenCc0E0KDAoKXFOaWJvwvF5iMNG5g4EIPauE+39h8jHXelOSdIuLnpJx9uihmkqTezg8sYiAFz0AkNasdHhT8C5lD2oe3NWppwX3axG2xZvjeoRw5824tYXwHPKKR7PYhPAbm+i0tQNX+2AADWF1pmM+TcQGyH3cPM6nY4qxTbmJ+sYOKFYICIDwHoP8BlZr8oil3Tbz3RytfnW24DMCjIz8dyShOXhtRJIfKCgBYA4kc57nqPXYyFYD5cWWi9kcFXQVNnMnNcz+sqeKSvaiYrNlh/HoKkrbOzdpnXrhDmqeTdY0uwJCWXhL6ZXZtC/QEtL4UrTE6ERwKZVSYTC+GwlgYbQr0jPNxbkxyJ64y0vwrXGRZM+IZJ5KCfFOFSPT4J1dR826Pxx064coF5Pcz21yF72MSzQ7U/mehuBv8ZwO1wgZaAzcz8h4C4NSpBudCOTOsMBIj0+bfPyz0dyzWmuggi/MhX3fdSzS09/JbkrIPKs4oTlwS6YaTasLCLSSB/M88IVq/yHFMR2flJ18ErEvxKuw3Tc5YmfNWvgMvAMB/Db/eJ27b1kwHvyfOZ7u9D87CpFN4bET3LQjA/FQxNBGyG5GuySpKmQaAhwOJx5JqCO4VEeDgEd2xbTnGSV6J4hAMT/J02GVQQlOcfzGR0eftBy7vh+sY7gi1uSO7aZvWZqu+4AT4MBgle8of7LQkVRfVjFQVfEnCm8x1pxZyS5Bl3P5bU0O/oMPJR51Ki5UQrJlJ6NANYojoU8LPPyTYeBnKnvkN7BULs86RbwXIZg+eozIlZJUnTspcl/91pGfpt0wGIg/ahosB6VVcYt0cbWPO3fxnkn8BCSl3QSSDd0z2Jc2ZeYdz1wdWzTOMDBgwUnShxs0IsF+eaMpoFcB0DB7rroWFRYfgEoH91+RzMnNdfDhH0E2jrTPuM7PCmqhRBR06k0g2FlimSe5Yggnhv7+gXK4LtxCES/7IZoOgYJo9NOx/llKYUBK5KxPo6oJD4Pnj/cLPsdXHS324uSwz0HiP8OD+WAU/gqcw7MJoJl/eA2/yc0uTlQW3jxZbZrPGvXXe/kl2a8jYA3FKS9GllQd0vmJR3AAx2jc9IMAEMBsl7ckpT+i0lJoA4o780lCeUMSSBQvfkAgGjUmpA1e0h8RY1zAEH506Z+VtFoTcZHOXR1u+DdypACiAFBtNzBZbxEpzVq21LXBrkh7gAHQ6YNESKYXGPY+nQguZ/rC2wJrJG7p3Y0i68jrDKKk39kkibCsDbTCH8LbskpV/zuCKIpJPHW+GGAsvlgDPLTAAvMWTAAzYU5qDh4RfyzfGQ8mE3h0kBuFbC3XDZaa5SnV2S9FoPIl71x5IImAppJHowBKfqH9lLk7YElpLktxFTAfltIq0sqJsowTe7nMrmwDrRGHTzaRjJp7pOAGLwyjkrEvf4CyH9LwH32Wtd5ZpKZ9JT/wVuJBx+kyelpj/eCjWSj3ULORSTpIBSTbNLNbhDJvK7PGQBfhxSfBGMyvNAYY97IZi1Tn9VL3UBWQw4VS8RHQXwbpAKK4OaEAEIY0aALTxCWej2MzTtcQB+Y6WQGjBZvLyo4T6AbuxaXDrNXuy/MOrng2QgraCTbLi+XwM3HvF+K1pRlLDjYhKKzD8jiAnOecV72aVJ21kEic8bdMZAl19cVD8JzF0keHVWSfLvmbRNPdsm/HJ2afL6XrrX6O+biSH+WKLSrmNCmbU/E/hAYHB2vt1DW20BwOwFwPIC64+6djITodUepj0NYJsf4DVtlD8L0ZhJLMs8xOqim8tGHPF2bC3XMSmPe7J7Ph0a25+Bq5tmIrWiyNoMD6KeJRL7WtGTT+4Og7X7/AACFrjE2r8DOVh68s+UWltgTdQk/6kbj1wIAM0tbVWxMVHzCDTZH3zYK4W+12iPZLFP+GZjEM7xkraLLGeTdLMYrGlUrOgpkSQWs1euBX3c08ZKlqghn8wMSeRmNapmVik2wX/qGhcJfnyuKe1web7lXfJJzIEizgTwqqdGIKG9DVdCDwHPZZemeB3vuqagMRnQngTYtQDlX0gocWC+rHt+SHecmIkKD8egyybF6lOHRcenDVUihU4JT07QhzMhDFIo0RHeh8IQkbSrrOl0ZGs6bLcdbZEdeyztjpp6tfXDLY1H0yIHH6o+fLhPTJbOpccOAfBwKLjP9k9cQ3Q23Hmo/FJOafJ2ADB+n7jflmk9Ah/KzUGU4mezQXsIEKNdUmjznJLkKgCYt3pM54t5tVeqiuFFAv3UQ//+U5DMzSoZWtcrQaGIzyH9TPe05x9sjO4KtugklnUzFFzlilDVrCu03K844/uJRNQqJe7usTED9kDzM0vcwLWdcfECN9VGdFC2dqwCgHDwWhvoYXjseCCiKwEsB4AXCuvSBMTGroNUGKhx6O1+XLMR2nx0pzXapSJMCvPrPqbLx4G6PmwYwq+flpyeOjTsnIvPi0tjifT4IYZBdgdGHj7iODtxqD58ZFo4GcO83aPWdg3NLSoYAppUQCTATGDWQNDArCF+sAFREd7PqRqjts7GjYcdalSk+LatQ1qF4Lqmw+r+9na557Nvj9Y+/cfmHceOHWsKYCfyTnSfDwsQhlXNZCXUL9zMnFmlgOGmocjRvV1k1sukbShoeEaSzPc2suQkAG71/mKh+XwN5JacqhReUtSlCn+2tsCaqCPOgF7U5JoSLKEurPCd8dtsmZZdAHkmvujCDPJCAJsqiiwLmXGNh2p32+q5JUmrAKxav8g8jo911OWuCrytqNu3pS/gN3JiFACU5zWcC5bu8ZGatqarvlnLkhvXF5hXC6L/83hwWmVe/dXQKRkAm5g5wQVah1DVX9xWMrzehz6jSmqY13VmhASXKUzn+0UASef+DsV1P4nNmHVtyvxxmZHTRyQbzxgcp+9RGre2S3z2rR4j0kfh0FE9Bg8eAlZ0SBoTDZ0u+AlcR5rbsavpGCLCVDg6W9B82IxogxWjh4fTqOHhesBbAwLAL6+Ox+J7JCwNnfu+29O27V+fH3mm7PmDb5HT3rKsIsJ8b2Ido24uS9obCigqCiwrQc7kDGY8l1OadLuXTfZQ3XDSKbvhtXeK6vbqE9JNJlLL8xszScjNbkkvsSp7WdJJT/ZYX1BfKEgUe/tYtIYFVijM33TlOzDLDTmlKVkn0lZFgeUjn/1pTUa7GG8zyE88pOG+tk5M8YxarTPtMypqxMdg7nmbD+GO7OKktX6szoMHh0m97kC32SLmkJAlAFI9zLjns0qS5gLAY3mZc+fOTHw2NkoX0ods7A7Gt9ZJmHB2xkmZk7Z2O9ob30V8TEdI9zMz/vxm45uuyBlv9edZgydk+3rhIJrftdyl9Pfuc5an7gfDJ3+UU0c6rHkVRZbbSNHe8TBPajuJyk6FQc+GzqcAPuKtwnm2YH6X3duKSJWSTvz0GfI7nXFIp0Fu8gAtWPIS31BrrinDpteJawEOlvzTxMw/CwRaADBEGJpBaPdgNtd7ghbAHkWv5XUbrMpoS6OdNBnamSoGPSE+7Cts3/ohDtTuRvWegzBbW6BpoTGoh5vbYLY04etvvkPtnq+wZ8ebIYMWAHbX2GA+7BhLXbypTlCDN7KxJqc06a7eKqossr7MzDOccyWeyypJuD0wt8lUWWT9m++3y/yoe03+LKss5a1T5Y2WF1muJQ5+srkrEXzJyWgrgNT1dFg2ZRUnXhX02fstkRxGOUT8kEvNVwNUaVRbf9fbd9IqCuvvAsQf/OcAb0i7mJu7otvE+vDFyWUXTY5+qLbeBoeDQQI42qJi1PBwxEaH5r912iXMjXbY7AoMBgMMeh1U2Q0k5wEvKsB2xEYrGBQTWr0dNonq2g4IAcREKbB1Mg5aOzEsKazGrR7KCy3vErxCj61aW0daT/Zceb45hwSt73YUHJPmmoJ/82yjaV9ciz28jIA7/HZcMJiJ7s8pSVx5qqmU8oL6+QSxFORNzEvwo3NKkh86ae3kN2ZCaG+T/wEi+9QO7ZJbV6YeOFXvWJFvuYCJcwSJDIZWR0wbs0qT/aKYXcD1vd7SqsLcaEdstA5vvt+Ec8+KxuBYHWx2JxCNYQI6hSClE7hOAoQgGRAC0DSGopBH/Md5nQF02p1HJDpURkyUDgRGa7sGvV5gx+421NbZcN1lQ53SfbAeQhA0ydj6XSsmnhWF6v22Gp0HX/QMBHkCN0oXFfYrAAG3iFSZthtsDjJ5IG9FT6AFgBucZyXcVVFkWQ7J9xLRJABxxLTXociy3KVJn58ODjCnNOV36/LMrwqFCggYDRJWkPbMnKUn98N5Ocvid60tsE4xCjzKzBcDZAS01+xA6dxTCFoAyF6WtAXo+/csukpMlA4xUU542O0ScTE6DE8xhvz878oP4OfT45GeauxTuzv3tiMyXCAtOcxT+2N/fScmnhUFciU5u4EbHtb0N5sa3wCX1+p8QCwIBly7I2EFILskyd7s4qQ/5IR4jld2cdI+APf/JwlsF9V1x6lux/Xh6X6ToP1DKwctndi+uxVXXzwkAI8LYJZpvL28sH45QXhGW86sKGxckF0S7/W1mIoiy2WS5bxuJ0P9aV9PTBwovRbjIKMx4ZyJ4TGXTYyOVVURteXrFrrqkkGQTHywztbpIHS89n5jo6E1ss8Efn8oX+9sxXNV9Vi9ODNIAKJLtZWkrKwoslwPhsfhINrKSlPjB1km54k26/LM6WA87yHHnznec7EGCsRPzgtPvfT8oROvvjghvdMhRwtBk/R6jE1LMsYlDTFA52KpbJ0Sy5+txcJcbzp2deFoNB9TUWe1qwfMtvrICOVrY5jYvbum3Tok1lBdvHZ/49ffHvm+tRX9IlHcoCfsN3fi3Y+P4McTY93v71n0SoAkE5X1WTrYv/bY4Ejs0D7YUGR5Ukpsg0Ax2OVsEH3lcCgPDuAvtDJ6NMJ+dmHqrBuviJ8YHaM7b8ggw9nxcfqYcKM47jqJCINi9BgUo9eNHxM5HHAGGs4/OwbNLSrGpIZh09pLUL2/vS0uSre1vtFeu29/xzdVb1g/37Kz6ZMfyth8/OVRREXqMHSQHg/MHQ7fyJxncajSP0Jya8mQA+X5jVMgtHcJztMHAURKRj4I3Yd4E1kAvvFk7E37Ly7K7KsTzp84Ieaqhkb7T+7LTr0gLckYcbo7EWEU+FFmVCSAHw9PMf54yjkxmH1dIr7b29Z5qFk98s5HhxFmEIgwCgyK1WPU8PBT1pd2m4SlsRM797Zj6GA9Io0K7A7GWaMjERciTRYVqbTpgnnDlXkNl7FOVoBxYYB1Xqep8qK+HCz8v1Syrk+efOevkm+IihR3nzM2ehAA3Ln4eyTHh/2g+jl2ZGQYfA7Zrm+wY8lTNRiVFo4Io0BSvAGWww58W92GOksnQNAUhZzsrMZCYyZNY1I1BoEQZhBdvC7vqG6jnXvbnVSXjpCSYMCgWD2GJYah8q8WzLg6AePGRPa53/sO2hqDQjyrLKEawNTKIvOlUtLVJMQIyWobmD7g9o6/9Rav/18rsbHI+MvqH92WkRpxc1qSMd3XNsv6eSJWvrAfD94+4gf9HikJBiQN1mP61EFIGuqM0E89N9ZLi9g6nbytqjF0CkGnEEr+UIMLz43FRZOc915+4aBeQ8jKcVpIZqttS6+yOas4eTNO0qk2/4WFnjaNuTwzPfK3F0yIuSgqXIkOduNFk+Lw8luNsB6yI3GooX/THWHiP9p+U4v6kW4Ae8dVdK89M/7G6Ej9qkvOj0sK9SHTfel4/IWDKF6QMTCCx1lq6zra7ly06y0xMBR9KzOuSsje/vp55munxf+pL6AFgEExehjDCJs/6/smaoOecOfs1P/58d+xu30BANsAcPtYqmtbPmhtl8cdSs2/YwQ2vnOoz88JQW6b83+1bNl6tObeZds2AMF2+Q6UoGXrTlvNlFlfXLvhr2ZT42FHn59XFMI1lw5B5avWgcHsQ2k+pppf2tRwRU0NbEAvX08fKD04rQ/tXLJh2bi/X3FJXFXCEEN6X5698seDce+SXbhu2hA3d2l3SDQednTsr7cdjB+k/7LhiMOiSVlXZ7U31pltLYeOqC2KYDsADBkcRqNSDLEOxtCoKP2IqHDljPRh4SNY4/OGJYcpJ/pu4zKjEBWhnNLxK7w7HUqITdTW2aq/3tZ27RPPH3SfPDQA3BMot+Tv+PzMdOO0FXmZ/+/aaUOm9OXZu2an4OkNdQd/eumQj9o7HV+8/s/mb97e3LDtq+/b64+3PxdOij5zwa/TJqcmh01PTTJOtnXKccdTTxeldUq92xA2XBw9pqK6pmPT4pW7bq14vclrXyENwO/klIrlZ+b/8sqE0sgeJJW5sbP9ky+Ovne0TXtl1Qu1722r7jh4KvsUERGRfMeMuHGTxsdee9boiEsTh4adk5p4aoIgS1bvw4XnxuLKiwafcF3HWlV+84PDm175e+PSqncaAn6jeQC4J7HMzxl245J5GY/FRunSAWd4s7q23aJKrtz4VuNbz79a+6nZjP/YB/GSk5MjfjPbcMHw5MhzM1LDpoxICc9k4rPTkoziPwlcKRn76zubm485Nm/f1bZp8+d1Lz3/ckuPud0DwD3JpWzeWcPPnaDfkBSv31HxSsNfHl+//36u/sAAAACZSURBVJ0fcn+jozHk/jkZUyeOj5wUG6WfMHpExLDWNvXskcPDDYqgUwJcZsByqLPd0mjf2dBk3/Lep0fe37j5wF+rqxHy94UHgDtQAuJi5LCw0bfflDoiMyNylBAYHx0uzklNMqZBIm3oYL0SF63zslN9ges+Z4HRXFtvazpg7qxOTTRs/mTr0f1bth79auO7TXsAHPd31v4/2HTIGUIEEzoAAAAASUVORK5CYII="/>
</defs>
</svg>
`

const width = Dimensions.get('window').width

export default function Header() {

    const LogoIcon = () => <SvgXml xml={logoIcon} />

    return (
        <View style={{ paddingHorizontal: 15, alignItems: 'center' }}>
            <View style={{ alignSelf: 'flex-start', marginVertical: 20 }}>
                <LogoIcon />
            </View>
            <Searchbar style={{
                width: width * 0.8,
                borderWidth: 3,
                borderColor: '#753CDD',
            }}
            iconColor='#753CDD'
            placeholder='Roupa ou Loja'  />
        </View>
    )
}
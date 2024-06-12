// From https://www.dicebear.com/how-to-use/http-api/

const profile_imgs_name_list = [
  "Garfield",
  "Tinkerbell",
  "Annie",
  "Loki",
  "Cleo",
  "Angel",
  "Bob",
  "Mia",
  "Coco",
  "Gracie",
  "Bear",
  "Bella",
  "Abby",
  "Harley",
  "Cali",
  "Leo",
  "Luna",
  "Jack",
  "Felix",
  "Kiki",
]

const profile_imgs_collections_list = [
  "adventurer-neutral",
  "avataaars-neutral",
  "big-ears-neutral",
  "fun-emoji",
  "lorelei",
  "micah",
  "notionists-neutral",
  "lorelei-neutral",
]

export const generateImage = () => {
  const collection =
    profile_imgs_collections_list[
      Math.floor(Math.random() * profile_imgs_collections_list.length)
    ]

  const seed =
    profile_imgs_name_list[
      Math.floor(Math.random() * profile_imgs_name_list.length)
    ]

  return `https://api.dicebear.com/6.x/${collection}/svg?seed=${seed}`
}

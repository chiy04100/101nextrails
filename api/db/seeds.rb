# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.create!(
  [
    {
      title: 'Next.js + Ruby on Rails + Docker の環境構築'
    },
    {
      title: 'React Hooks でカスタムフックを作る'
    },
    {
      title: 'GraphQL と Apollo Client 入門'
    },
    {
      title: '【TypeScript4.3】Template Literal Types'
    },
    {
      title: 'Tailwind CSS でダークモード実装'
    },
    
  ]
)

User.create!(
  [
    {
      familyname: '吉田',
      name: '匠汰', 
      postalcode: '123456',
      address:'東京都港区',
      Phonenumber: '1234567890'
    },
    {
      familyname: '吉田',
      name: '匠汰', 
      postalcode: '123456',
      address:'東京都港区',
      Phonenumber: '1234567890'
    }
  ]
)


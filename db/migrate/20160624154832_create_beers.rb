class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.text :description
      t.string :style, null: false
      t.string :alcohol_content

      t.timestamps null: false
    end
  end
end

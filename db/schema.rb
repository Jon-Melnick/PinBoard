# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160708144318) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.integer  "creator_id",                                                                                                           null: false
    t.string   "title",       default: "untitled"
    t.text     "description"
    t.text     "board_style", default: "http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467679359/corkboard_x2gpyn.jpg"
    t.boolean  "hidden"
    t.datetime "created_at",                                                                                                           null: false
    t.datetime "updated_at",                                                                                                           null: false
  end

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "pin_id",     null: false
    t.string   "comment",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["pin_id"], name: "index_comments_on_pin_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "pins", force: :cascade do |t|
    t.integer  "user_id",                  null: false
    t.integer  "board_id",                 null: false
    t.string   "title"
    t.text     "body"
    t.text     "pin_color"
    t.text     "note_color"
    t.text     "img_url"
    t.integer  "posX",       default: 100
    t.integer  "posY",       default: 100
    t.integer  "zIndex",     default: 5
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "pins", ["board_id"], name: "index_pins_on_board_id", using: :btree
  add_index "pins", ["user_id"], name: "index_pins_on_user_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer "tag_id", null: false
    t.integer "pin_id", null: false
  end

  add_index "taggings", ["pin_id"], name: "index_taggings_on_pin_id", using: :btree
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string "tag", null: false
  end

  add_index "tags", ["tag"], name: "index_tags_on_tag", using: :btree

  create_table "teams", force: :cascade do |t|
    t.integer  "team_member_id", null: false
    t.integer  "board_id",       null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "teams", ["board_id"], name: "index_teams_on_board_id", using: :btree
  add_index "teams", ["team_member_id"], name: "index_teams_on_team_member_id", using: :btree

  create_table "user_preferences", force: :cascade do |t|
    t.integer  "user_id",                                                                                                             null: false
    t.string   "user_color"
    t.string   "nav_color",  default: "#C7D0D5"
    t.string   "home_board", default: "http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467679359/corkboard_x2gpyn.jpg"
    t.datetime "created_at",                                                                                                          null: false
    t.datetime "updated_at",                                                                                                          null: false
  end

  add_index "user_preferences", ["user_id"], name: "index_user_preferences_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.string   "email_address",   null: false
    t.string   "user_pic_url"
    t.string   "user_initials"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email_address"], name: "index_users_on_email_address", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end

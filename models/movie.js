module.exports = 
(sequelize, DataTypes) => { 
    const Movie = sequelize.define("Movie", { 
        title: { type: DataTypes.STRING, allowNull: false }, 
        release_year: DataTypes.INTEGER, 
        genre: DataTypes.STRING, 
        tmdb_id: { type: DataTypes.INTEGER, unique: true } }, 
        { timestamps: true }); 
        Movie.associate = (models) => 
            { Movie.hasMany(models.Ranking, { foreignKey: "movie_id" 

            }); 
        }; return Movie; };
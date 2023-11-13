from flask import Flask, render_template, jsonify
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

data = pd.read_csv('BattedBallData.csv')
data = data.dropna()
x = data[['LAUNCH_ANGLE', 'EXIT_SPEED', 'EXIT_DIRECTION', 'HIT_DISTANCE', 'HANG_TIME', 'HIT_SPIN_RATE']]
y = data['PLAY_OUTCOME']
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(x.values, y)

@app.route('/predictions')
@cross_origin()
def predictions():
    predictions = []
    for index, row in data.iterrows():
        input = [[row['LAUNCH_ANGLE'], row['EXIT_SPEED'], row['EXIT_DIRECTION'], row['HIT_DISTANCE'], row['HANG_TIME'], row['HIT_SPIN_RATE']]]

        y_pred = knn.predict(input)

        predictions.append({
            'playId': index,
            'pitcher': row['PITCHER'],
            'batter': row['BATTER'],
            'date': row['GAME_DATE'],
            'launchAngle': row['LAUNCH_ANGLE'],
            'exitSpeed': row['EXIT_SPEED'],
            'exitDirection': row['EXIT_DIRECTION'],
            'hitDistance': row['HIT_DISTANCE'],
            'hangTime': row['HANG_TIME'],
            'hitSpinRate': row['HIT_SPIN_RATE'],
            'predictedOutcome': y_pred[0],
            'trueOutcome': row['PLAY_OUTCOME'],
            'videoLink': row['VIDEO_LINK']
        })

    return jsonify(predictions)

@app.route('/')
def display_graphs():
    data = pd.read_csv('BattedBallData.csv')

    exit_velocity_mean = data['EXIT_SPEED'].mean()
    exit_velocity_std = data['EXIT_SPEED'].std()

    launch_angle_mean = data['LAUNCH_ANGLE'].mean()
    launch_angle_std = data['LAUNCH_ANGLE'].std()

    hit_distance_mean = data['HIT_DISTANCE'].mean()
    hit_distance_std = data['HIT_DISTANCE'].std()

    color_map = {
        'Out': 'red',
        'Single': 'blue',
        'Double': 'green',
        'Triple': 'purple',
        'HomeRun': 'orange',
        'Error': 'gray',
        'FieldersChoice': 'brown',
        'Sacrifice': 'yellow',
        'TriplePlay': 'pink',
        'Undefined': 'black'
    }

    plt.figure(figsize=(15, 10))

    plt.subplot(3, 2, 1)
    for play_outcome in ['Out', 'Single', 'Double', 'Triple', 'HomeRun']:
        subset_data = data[data['PLAY_OUTCOME'] == play_outcome]
        plt.scatter(subset_data['EXIT_SPEED'], subset_data['LAUNCH_ANGLE'], label=play_outcome,
                    color=color_map[play_outcome], alpha=0.5)
    plt.xlabel('Exit Velocity (mph)')
    plt.ylabel('Launch Angle (degrees)')
    plt.title('Exit Velocity vs. Launch Angle')
    plt.legend()
    plt.savefig('./static/exit_velocity_vs_launch_angle.png', dpi=300, bbox_inches='tight')
    plt.clf()

    plt.subplot(3, 2, 2)
    for play_outcome in ['Out', 'Single', 'Double', 'Triple', 'HomeRun']:
        subset_data = data[data['PLAY_OUTCOME'] == play_outcome]
        plt.scatter(subset_data['EXIT_SPEED'], subset_data['HIT_DISTANCE'], label=play_outcome,
                    color=color_map[play_outcome], alpha=0.5)
    plt.xlabel('Exit Velocity (mph)')
    plt.ylabel('Hit Distance (feet)')
    plt.title('Exit Velocity vs. Hit Distance by Play Outcome')
    plt.legend()
    plt.savefig('./static/exit_velocity_vs_hit_distance.png', dpi=300, bbox_inches='tight')
    plt.clf()

    plt.subplot(3, 2, 3)
    for play_outcome in ['Out', 'Single', 'Double', 'Triple', 'HomeRun']:
        subset_data = data[data['PLAY_OUTCOME'] == play_outcome]
        plt.scatter(subset_data['LAUNCH_ANGLE'], subset_data['HIT_DISTANCE'], label=play_outcome,
                    color=color_map[play_outcome], alpha=0.5)
    plt.xlabel('Launch Angle (degrees)')
    plt.ylabel('Hit Distance (feet)')
    plt.title('Launch Angle vs. Hit Distance by Play Outcome')
    plt.legend()
    plt.savefig('./static/launch_angle_vs_hit_distance.png', dpi=300, bbox_inches='tight')
    plt.clf()

    plt.subplot(3, 3, 4)
    plt.hist(data['LAUNCH_ANGLE'], bins=20, edgecolor='black')
    plt.xlabel('Launch Angle (degrees)')
    plt.ylabel('Frequency')
    plt.title('Distribution of Launch Angle')
    plt.axvline(launch_angle_mean, color='red', linestyle='--', label='Mean Launch Angle')
    plt.axvline(launch_angle_mean + launch_angle_std, color='blue', linestyle='--', label='Mean + 1 Std. Dev.')
    plt.axvline(launch_angle_mean - launch_angle_std, color='blue', linestyle='--', label='Mean - 1 Std. Dev.')
    plt.legend()
    plt.savefig('./static/launch_angle_distribution', dpi=300, bbox_inches='tight')
    plt.clf()

    plt.subplot(3, 3, 4)
    plt.hist(data['EXIT_SPEED'], bins=20, edgecolor='black')
    plt.xlabel('Exit Speed (mph)')
    plt.ylabel('Frequency')
    plt.title('Distribution of Exit Speed')
    plt.axvline(exit_velocity_mean, color='red', linestyle='--', label='Mean Exit Speed')
    plt.axvline(exit_velocity_mean + exit_velocity_std, color='blue', linestyle='--', label='Mean + 1 Std. Dev.')
    plt.axvline(exit_velocity_mean - exit_velocity_std, color='blue', linestyle='--', label='Mean - 1 Std. Dev.')
    plt.legend()
    plt.savefig('./static/exit_speed_distribution', dpi=300, bbox_inches='tight')
    plt.clf()

    plt.subplot(3, 3, 4)
    plt.hist(data['HIT_DISTANCE'], bins=20, edgecolor='black')
    plt.xlabel('Hit Distance (ft)')
    plt.ylabel('Frequency')
    plt.title('Distribution of Hit Distance')
    plt.axvline(hit_distance_mean, color='red', linestyle='--', label='Mean Hit Distance')
    plt.axvline(hit_distance_mean + hit_distance_std, color='blue', linestyle='--', label='Mean + 1 Std. Dev.')
    plt.axvline(hit_distance_mean - hit_distance_std, color='blue', linestyle='--', label='Mean - 1 Std. Dev.')
    plt.legend()
    plt.savefig('./static/hit_distance_distribution', dpi=300, bbox_inches='tight')
    plt.clf()
    return render_template('index.html')


if __name__ == '__main__':
    app.run()

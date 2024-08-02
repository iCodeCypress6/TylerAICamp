from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/pages/imgGen.html')
def imgGen():
    return render_template('/pages/imgGen.html')

@app.route('/pages/imgGen.html')
def textGen():
    return render_template('/pages/imgGen.html')

@app.route('/pages/imgGen.html')
def codie():
    return render_template('/pages/imgGen.html')

if __name__ == '__main__':
    app.run(debug=True)


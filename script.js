from flask import Flask, render_template, request

app = Flask(_name_)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    username = request.form['username']
    phone = request.form['phone']
    email = request.form['email']

    # Process user input here (e.g., validate, store in database)
    message = f"Thanks for registering, {username}! Your phone number is {phone} and email address is {email}."

    return render_template('index.html', message=message)

if _name_ == '_main_':
    app.run(debug=True)